{ pkgs }:

{
  buildInputs = with pkgs; [
    pkg-config
    dbus
    openssl
    librsvg
    
    webkitgtk_4_1
    gtk3
    cairo
    gdk-pixbuf
    glib
    pango
    harfbuzz
    libsoup_3
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