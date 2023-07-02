#!/usr/bin/env python3

from http.server import BaseHTTPRequestHandler
from pathlib import Path

OUR_ROOT = Path(__file__).resolve().parent


class HTTPHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        base = (OUR_ROOT / "shim_canvas2d.html").read_text(encoding="utf-8")
        app = (OUR_ROOT / "luck.js").read_text(encoding="utf-8")
        result = base.replace("{{ app }}", app, 1)

        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(result.encode("utf-8"))


if __name__ == "__main__":
    from http.server import HTTPServer

    print("Listening on port 8000")
    server = HTTPServer(("localhost", 8000), HTTPHandler)
    server.serve_forever()
