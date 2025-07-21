# emailoptin

National Campaign Opt-In Tool
Overview
This tool allows 150+ clubs to opt in or opt out of national email campaigns using one shared link per campaign. Clubs can:

Select their club name via autocomplete (to reduce errors)

Click Opt In or Opt Out

Leave optional notes (e.g., date changes, logo requests)

View a real-time status window showing their region's participation on the same page

The Email Team and Regional Directors can:

Create new campaigns using a generator

Track live responses for each campaign by region

View and download all club responses

File Structure
bash
Copy
Edit
/campaign-opt-in-tool
│
├── /firebase-setup
│   └── firebase-rules.json      # Firebase Realtime DB rules
│
├── /public
│   ├── create-campaign.html     # Create a new campaign (Email Team)
│   ├── optin.html                # Club opt-in/out form with live regional status
│   └── dashboard.html            # Admin dashboard (all campaigns & regions)
│
├── /assets
│   ├── style.css                 # SaaS-style CSS using company color palette
│   └── clubs.js                  # Master list of clubs & region mapping (hardcoded version)
│
├── /scripts
│   ├── firebase-init.js          # Firebase config & initialization
│   └── app.js                    # Frontend logic (submit, real-time region updates, dashboard)
How It Works
1️⃣ Campaign Creation
Use create-campaign.html

Enter campaign name (e.g., BackToSchool2025)

The system generates a shared link:

arduino
Copy
Edit
https://yourdomain.com/optin.html?campaign=BackToSchool2025
2️⃣ Club Experience
Club clicks shared link

Autocomplete to select their club name

Click Opt In or Opt Out

Enter optional notes

View live region status window (updates in real time)

3️⃣ Email Team Dashboard
Use dashboard.html to view all campaigns

Filter by campaign and region

See real-time data of clubs that opted in, opted out, or have not responded

CSV export available (optional feature)

Firebase Structure
lua
Copy
Edit
campaigns/
   BackToSchool2025/
       CanyonGate:
           status: "Opt In"
           notes: "Use alternate logo"
           region: "West"
           timestamp: "2025-07-21T10:05:00Z"
       AlisoViejo:
           status: "Opt Out"
           notes: ""
           region: "West"
           timestamp: "2025-07-21T10:10:00Z"
Setup Instructions
1. Firebase
Create a Firebase Project

Enable Realtime Database

Copy/paste the contents of /firebase-setup/firebase-rules.json into Firebase Database Rules

2. Hosting
Use Firebase Hosting or host the files on your internal server

3. Deployment Steps
Task	File/Action
Create campaign	create-campaign.html
Send opt-in link to clubs	optin.html?campaign=YourCampaignName
Track responses	dashboard.html

Customization
Customization Area	Location
Color palette & fonts	assets/style.css
Club list & regions	assets/clubs.js (can be moved to Firebase later)

Future Enhancements (Optional)
Move club list to Firebase for dynamic management

Add authentication for the dashboard (regional access control)

Expand to include multi-campaign reporting exports

Support / Contact
For questions or future iterations, contact:
[Your Name] / Marketing Tech Team
