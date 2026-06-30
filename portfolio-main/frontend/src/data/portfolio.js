// Centralized portfolio content for Karanam Naga Sumana
export const profile = {
  name: "Karanam Naga Sumana",
  handle: "@sumana",
  role: "Data Scientist & ML Engineer",
  pronoun: "she/her",
  location: "Hyderabad, India",
  status: "Open to Internships · Summer 2026",
  tagline:
    "Undergraduate engineer turning messy datasets into decisions — predictive models, dashboards, and the occasional 3 AM Kaggle submission.",
  summary:
    "B.Tech student at Mahindra University specializing in Electronics & Computer Engineering. I work across the full data lifecycle — wrangling, modeling, and visualizing — with a soft spot for ML interpretability and analytics that actually ship to stakeholders.",
  email: "sumanakaranamwork@gmail.com",
  phone: "+91 9494855653",
  linkedin: "https://www.linkedin.com/in/karanam-naga-sumana/",
  github: "https://github.com/sumanakaranam",
  resumeUrl:
    "https://customer-assets.emergentagent.com/job_6c4501bf-bdb1-4d3d-8dcb-1c2ab81250d5/artifacts/uslkcft3_Sumana%20Karanam%20Resume%20%282%29.pdf",
};

export const stats = [
  { label: "YRS_CODING", value: "3+" },
  { label: "PROJECTS", value: "06" },
  { label: "HACKATHONS", value: "04" },
  { label: "WINS", value: "01" },
];

export const education = [
  {
    school: "Mahindra University",
    program: "B.Tech · Electronics & Computer Engineering",
    period: "2023 — 2027",
    score: "Hyderabad, India",
    note: "Coursework: DSA, DBMS, Probability & Statistics, Computer Architecture, Signals & Systems, Machine Learning.",
  },
];

export const skills = {
  Languages: [
    { name: "Python", level: "primary" },
    { name: "C", level: "secondary" },
    { name: "Java", level: "secondary" },
    { name: "MATLAB", level: "secondary" },
    { name: "SQL", level: "primary" },
  ],
  Libraries: [
    { name: "Pandas", level: "primary" },
    { name: "NumPy", level: "primary" },
    { name: "Scikit-learn", level: "primary" },
    { name: "Matplotlib", level: "secondary" },
    { name: "Seaborn", level: "secondary" },
  ],
  Tools: [
    { name: "Jupyter", level: "primary" },
    { name: "Git", level: "primary" },
    { name: "Google Colab", level: "secondary" },
    { name: "Power BI", level: "primary" },
    { name: "VS Code", level: "secondary" },
  ],
};

export const projects = [
  {
    id: "hr-analytics",
    index: "01",
    title: "HR Analytics — Attrition & Salary",
    blurb:
      "Predicted employee attrition and salary brackets using ensemble methods. Built feature pipelines, handled class imbalance, and surfaced retention levers via SHAP.",
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    metric: "Accuracy 87%",
    repo: "https://github.com/sumanakaranam",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
  {
    id: "stock-prediction",
    index: "02",
    title: "Stock Price Prediction",
    blurb:
      "Time-series forecasting with hyperparameter tuning across linear, tree, and gradient-boosted models. Evaluated on rolling windows with proper temporal splits.",
    stack: ["Python", "Scikit-learn", "NumPy", "Yahoo Finance"],
    metric: "RMSE ↓ 23%",
    repo: "https://github.com/sumanakaranam",
    image:
      "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg",
  },
  {
    id: "ipl-dashboard",
    index: "03",
    title: "IPL Analytics Dashboard",
    blurb:
      "Interactive Power BI dashboard analyzing 1,169 matches — venue advantage, toss impact, batter consistency, and bowler economy under pressure.",
    stack: ["Power BI", "DAX", "SQL", "Pandas"],
    metric: "1,169 matches",
    repo: "https://github.com/sumanakaranam",
    image:
      "https://images.pexels.com/photos/3001/india-cricket-cricket-bat-cricket-balls.jpg",
  },
];

export const achievements = [
  {
    code: "AWD_001",
    title: "1st Place — MANTHAN '25",
    org: "BITS Pilani, Hyderabad",
    note: "Won the flagship analytics & innovation competition against 200+ teams.",
    year: "2025",
  },
  {
    code: "AWD_002",
    title: "Top 5 Finalist — Student of the Year Hackathon",
    org: "Mahindra University",
    note: "Selected from 80+ entries for a 24-hour build-and-pitch round.",
    year: "2025",
  },
  {
    code: "LEAD_001",
    title: "Logistics Head",
    org: "Spring Spree (Annual Fest)",
    note: "Coordinated logistics across 12+ events; managed a 30-person ops team.",
    year: "2024 — 2025",
  },
  {
    code: "LEAD_002",
    title: "Logistics Head",
    org: "Technical Symposium",
    note: "Owned vendor management, venue setup, and run-of-show for 500+ attendees.",
    year: "2024",
  },
];

export const nowList = [
  "Building a recommendation engine side-project",
  "Reading: 'Designing ML Systems' by Chip Huyen",
  "Brushing up on SQL window functions",
  "Open to Summer '26 internships",
];
