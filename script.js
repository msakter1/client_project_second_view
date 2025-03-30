//------- TODO:---------------------
// 
// ----------HOME PAGE-----------
// 1. Add SEARCH funtionality (PARTLY DONE)
//   --> Users should be allowed to search keywords, which should show the 5(?) clostest matches out of ALL pages


// 2. Add home redirect from the logo (DONE)
//   --> Users should be able to return to the home page by clicking the UMSI logo
// 
// ---------STUDY PAGES----------- (not started)
// 3. ADD card switch functionality from image to info
//   ---> Users should be able to click on the library card images to reveal info.
//   --->

// 4. ADD arrows to switch between the cards 
// --> add more cards (around 6??)
// --> add blue right and left arrows that allows users to view all the cards

// ---------ALL PAGES---------------
// 5. Add more info in the footer
// --> add the umich logo, UMSI address, contact info, etc

// ---------CAPS PAGE---------------
// 6. Fix the quality of the student studying together image


const pages = [
    {
        "title": "About Me",
        "url": "about.html",
        "content": "Skip to Main Content\n\n\n\n Home\nStudy Spaces\nTutoring Sites\nCAPS\nStudent Success Portal\nWelcome to the UM Grad Success Navigator\n\nYour Comprehensive Guide to Resources for Graduate School Success\n\nThis guide is set up to help you be successul inside and outside of the classroom and we have included the following resources throughout our site:\n\nAcademic Resources\nPhysical Health\nMental Health\nLife Outside Classroom\nContact\nPhysical Health\n\nKeeping your body healthy is essential for success. The University of Michigan offers numerous resources to help you stay in top physical condition:\n\nUniversity Health Service (UHS)\nUniversity Health Services Building\n\nUniversity Health Service (UHS): Access comprehensive medical care, including routine check-ups, vaccinations, and specialist referrals.\n\nRecreational Sports\nUMSI out in the fall!\n\nParticipate in various fitness programs, sports clubs, and use of gym facilities to stay active and healthy.\n\nMental Health\n\nMaintaining your mental well-being is crucial for thriving in graduate school. Here are resources to support your mental health:\n\nCounseling and Psychological Services (CAPS):\n\nAccess individual counseling, group therapy, workshops, and crisis intervention services.\n\nWellness Coaching:\n\nWork with a wellness coach to develop strategies for managing stress, time, and overall well-being.\n\nMindfulness Resources:\n\nParticipate in mindfulness and meditation sessions to cultivate a calm and focused mind.\n\nSupport Groups:\n\nJoin peer support groups for shared experiences and collective coping strategies.\n\nLife Outside the Classroom\n\nGraduate school is more than just academics. It's important to cultivate a balanced life. Here are some resources to help you enjoy life outside the classroom:\n\nStudent Organizations\n\nJoin one of the many student organizations to connect with peers who share your interests and passions.\n\nArts and Culture\n\nExplore UM's vibrant arts scene with events, exhibitions, and performances happening year-round.\n\nCareer Services\n\nUtilize career counseling, job search resources, and networking opportunities to prepare for your professional future\n\nCommunity Engagement\n\nGet involved with local volunteering opportunities and community service projects to make a positive impact.\n\nHousing and Dining\n\nFind information on on-campus housing options and dining services to ensure a comfortable living experience.\n\nMSI Academic Advising | UMSI Academic Advising"
    },
    {
        "title": "Study Spaces",
        "url": "study_spaces.html",
        "content": "Skip to Main Content\n\n\n\nHome\nStudy Spaces\nTutoring Sites\nCAPS\nStudy Spaces\nCentral Campus Study Spaces\nLaw Library Building\n\n\nShapiro Library (the UgLi)\nAtmosphere: Mix of quiet and social space\nFeatures: Collaborative study rooms, computer stations, printers, books\nAddress: 919 S University Ave, Ann Arbor, MI 48109\nHatcher Graduate Library\nAtmosphere: mostly quiet and best for individual studying\nFeatures: Quiet reading rooms, reservable study spaces, and book collections\nAddress: 913 S University Ave, Ann Arbor, MI 48109\nLaw Library\nAtmosphere: Extremely quiet and formal\nFeatures: Gothic architecture, large study tables\nAddress: Legal Research Building, 801 Monroe St, Ann Arbor, MI 48109\nNorth Campus Study Spaces\nDuderstadt Library Building\n\n\n\nDuderstadt Center (The Dude)\nAlmosphere: Mix of collaborative and quiet areas\nFeatures: High-tech resources, computer labs, creative spaces\nAddress: 2281 Bonisteel Blvd, Ann Arbor, MI 48109\nPierpont Commons\nAtmosphere: Social and lively, great for casual studying or group projects\nFeatures: Food options, cozy seating\nAddress: 2101 Bonisteel Blvd, Ann Arbor, MI 48109\nArt & Architecture Building\nAtmosphere: Quiet and creative\nFeatures: Bright spaces, design-focused, large worktables\nAddress: 2000 Bonisteel Blvd, Ann Arbor, MI 48109\n\nMSI Academic Advising | UMSI Academic Advising"
    },
    {
        "title": "Tutoring Sites",
        "url": "tutoring_sites.html",
        "content": "Skip to Main Content\n\n\n\nHome\nStudy Spaces\nTutoring Sites\nCAPS\nTutoring Sites\nTutoring Through UMSI\nStudents receiving help during lecture\n\nThe UMSI Academic Success Team provides peer tutoring for UMSI students, including support for programming and math courses. Peer tutoring is available for courses like SI 106, SI 206, SI 506, SI 507, and general Python. Math tutoring covers areas like linear algebra, statistics, and general math. You can find additional resources and access a Peer-to-Peer Tutor Directory. For more details, you can reach out to umsi.academicsuccess@umich.edu\n\nBooking With Peer Tutors\nStudents working together\n\nUMSI offers peer tutoring by experienced students knowledgeable in specific programming and math subjects. Each tutor has a unique approach to teaching, providing you with the flexibility to choose a tutor based on your individual learning style. You can select their availability to sign up for sessions with your preferred tutor on any given day.\n\nFor more information and to sign up for tutoring, visit the UMSI Tutoring page\n\nMSI Academic Advising | UMSI Academic Advising"
    },
    {
        "title": "CAPS",
        "url": "caps.html",
        "content": "Skip to Main Content\n\n\n\nHome\nStudy Spaces\nTutoring Sites\nCAPS\nCounseling and Psychological Services (CAPS)\n\nNeed support? CAPS can help. Schedule an appointment today!\n\nAbout CAPS\nAngel Hall\n\nUniversity Health & Counseling (UHS) supports the health and well-being of students by helping them thrive, manage stress, and build meaningful connections. UHC is comprised of Counseling and Psychological Services (CAPS), which offers counseling services, and University Health Service (UHS), which provides"
    }
];

function searchPages() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    // let results = pages.filter(page => 
    //     page.title.toLowerCase().includes(query) || 
    //     page.content.toLowerCase().includes(query)
    // ).slice(0, 5); // Get top 5 matches

    let results = pages.filter(page => 
        page.title.toLowerCase().includes(query) || 
        page.content.replace(/\s+/g, ' ').trim().toLowerCase().includes(query)
    ).slice(0, 5);
    

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = results.length ? results.map(page => 
        `<p><a href="${page.url}">${page.title}</a></p>`
    ).join("") : "<p>No results found</p>";
}

document.querySelector(".search-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchPages();
    }
});

document.querySelectorAll(".card-image").forEach(image => {
    image.addEventListener("click", function() {
        const cardText = this.nextElementSibling.querySelector(".card-text"); // Get the text container (ul)
        cardText.classList.toggle("revealed");  // Toggle the visibility of the text
    });
});
