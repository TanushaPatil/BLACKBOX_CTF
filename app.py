from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__)

FLAG = "TECH{reverse_the_blackbox}"


@app.route("/")
def home():
    return send_from_directory(".", "index.html")


@app.route("/download")
def download_challenge():
    return send_from_directory(
        "challenge",
        "blackbox.exe",
        as_attachment=True
    )


@app.route("/submit", methods=["POST"])
def submit_flag():

    data = request.get_json(silent=True)

    if not data:
        return jsonify({
            "correct": False,
            "message": "No flag submitted."
        }), 400

    submitted_flag = data.get("flag", "").strip()

    if submitted_flag == FLAG:
        return jsonify({
            "correct": True,
            "message": "✓ Correct flag! Challenge solved."
        })

    return jsonify({
        "correct": False,
        "message": "✗ Incorrect flag. Keep reversing."
    })


if __name__ == "__main__":
    app.run(debug=True)