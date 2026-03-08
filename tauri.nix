{ pkgs }:

{
  buildInputs = with pkgs; [
    # build helpers
    pkg-config
    dbus
    openssl
    librsvg

    # tauri webview stack
    webkitgtk_4_1
    gtk3
    cairo
    gdk-pixbuf
    glib
    pango
    harfbuzz
    libsoup_3

    # optional but commonly required
    libayatana-appindicator
  ];

  LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath (with pkgs; [
    webkitgtk_4_1
    gtk3
    cairo
    gdk-pixbuf
    glib
    pango
    libsoup_3
  ]);
}