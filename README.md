# Tooth-risk-dashboard

Possible additions after static version:
Feature
Interactive 3D arch
Real-time GPT response
Export to JSON
Animated heatmap

Tool
Plotly 3D or Three.js
OpenAI API
JSON.stringify() and download.js
D3.js or Plotly scatter overlays
Here is a complete README.md for your Tooth-by-Tooth Risk Dashboard project. This is tailored to your current setup, includes AI integration plans, and provides installation instructions for both static and Flask versions:

⸻


# Tooth-by-Tooth Risk Dashboard

A visually interactive, AI-powered dashboard designed to display tooth-level dental risks from panoramic, frontal, and arch views. The system enables patient-friendly insights, procedural suggestions, and eventual AI inference using GPT and computer vision.

## Features

- Clickable and hoverable dental arch images
- Risk scores displayed per tooth (static mock data or future real input)
- AI-generated explanations for each tooth’s condition
- Suggested procedures and treatment alternatives
- “GPT Explains Your Risk” integration (in-progress)
- Export to JSON for EHR or research use (in-progress)
- Planned: Rotatable 3D model (Plotly/Three.js)

---

## Screenshots

![Tooth Risk Dashboard Screenshot](static/IMG_4366.png)

---

## File Structure

Tooth-risk-dashboard/
│
├── static/
│   ├── IMG_4366.png         # Frontal view
│   ├── IMG_4365.png         # Upper arch
│   └── IMG_4363.png         # Lower arch
│
├── templates/
│   └── index.html           # Main HTML UI (if using Flask)
│
├── css/
│   └── style.css            # UI styling
│
├── js/
│   └── script.js            # Interactivity, tooltip logic
│
├── app.py                   # Flask server (for dynamic AI version)
├── requirements.txt         # Flask dependencies
└── README.md

---

## Run Locally (Flask Version)

### 1. Clone the Repo

```bash
git clone https://github.com/ihunnamatata/Tooth-risk-dashboard.git
cd Tooth-risk-dashboard

2. Create and Activate Environment (optional but recommended)

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

3. Install Requirements

pip install -r requirements.txt

4. Run the App

python app.py

Open your browser to:
http://127.0.0.1:5000/

⸻

Static GitHub Pages Version

For the read-only version:
	•	Open index.html in your browser OR
	•	Visit your GitHub Pages live site:
https://ihunnamatata.github.io/Tooth-risk-dashboard/

⸻

Future AI Integration

Component	Description
Static Tooltip Risk Scores	Currently hardcoded per tooth
GPT Explanations	Will generate tailored outputs for each tooth
AI Model Input	Planned: Use X-rays or segmentation masks
Chart Export	Download JSON file of AI risk results


⸻

✨ Credits

Project by Ihunna Amugo, DDS Candidate, MHA, MS, PhD(c)
Part of the Digital Twin Intelligence portfolio.

⸻

License

MIT License — free to use and modify.

---

Would you like me to:
- Auto-generate this into your GitHub repo?
- Include screenshots as thumbnails?
- Add contributor/institution badges or citation lines for grant use?

Let me know!