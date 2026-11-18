package com.rahat.humayun;

import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.view.View;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
    private WebView web;

    @Override
    protected void onCreate(Bundle b) {
        super.onCreate(b);
        web = new WebView(this);
        web.setBackgroundColor(Color.parseColor("#0B0E18"));
        setContentView(web);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);          // হাইলাইট/বুকমার্ক/সেটিং এখানে সেভ হয়
        s.setAllowFileAccess(true);
        s.setTextZoom(100);                    // সিস্টেম ফন্ট স্কেল যেন লেআউট না ভাঙে
        s.setMediaPlaybackRequiresUserGesture(true);
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient() {
            @Override public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r) {
                String u = r.getUrl().toString();
                if (u.startsWith("http")) { open(u); return true; }
                return false;
            }
        });
        web.addJavascriptInterface(new Bridge(), "Android");
        web.loadUrl("file:///android_asset/www/index.html");
    }

    private void open(String url) {
        try { startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url))); } catch (Exception ignored) {}
    }

    class Bridge {
        @JavascriptInterface public void vibrate(int ms) {
            try {
                Vibrator v = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
                if (v != null) v.vibrate(VibrationEffect.createOneShot(ms, VibrationEffect.DEFAULT_AMPLITUDE));
            } catch (Exception ignored) {}
        }
        @JavascriptInterface public void keepScreenOn(final boolean on) {
            runOnUiThread(() -> {
                if (on) getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
                else getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            });
        }
        @JavascriptInterface public void setBars(final boolean dark) {
            runOnUiThread(() -> {
                int c = Color.parseColor(dark ? "#0B0E18" : "#F5EFE3");
                getWindow().setStatusBarColor(c);
                getWindow().setNavigationBarColor(c);
                web.setBackgroundColor(c);
                View d = getWindow().getDecorView();
                int f = d.getSystemUiVisibility();
                if (dark) f &= ~(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR);
                else f |= (View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR);
                d.setSystemUiVisibility(f);
            });
        }
        @JavascriptInterface public void copy(String t) {
            ClipboardManager cm = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
            cm.setPrimaryClip(ClipData.newPlainText("backup", t));
        }
        @JavascriptInterface public void share(String t) {
            Intent i = new Intent(Intent.ACTION_SEND);
            i.setType("text/plain");
            i.putExtra(Intent.EXTRA_TEXT, t);
            startActivity(Intent.createChooser(i, null));
        }
        @JavascriptInterface public void openUrl(String u) { open(u); }
    }

    @Override
    public void onBackPressed() {
        web.evaluateJavascript("window.__back&&window.__back()", r -> {
            if (!"true".equals(r)) finish();
        });
    }

    @Override protected void onPause() { super.onPause(); web.onPause(); }
    @Override protected void onResume() { super.onResume(); web.onResume(); }
}
