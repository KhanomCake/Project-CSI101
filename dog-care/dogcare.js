/* =========================================
   DOGCARE GUIDE SYSTEM
   6 Guides + YouTube / Image Media
========================================= */


/* -----------------------------------------
   1. ตั้งค่าสื่อของแต่ละหัวข้อ
----------------------------------------- */

const guideMedia = {

    "nutrition-details": {
        title: "วิธีเลือกอาหารและโภชนาการ",
        description: "เรียนรู้วิธีเลือกอาหารและปริมาณที่เหมาะสมกับน้องหมา",
        youtubeUrl: "https://www.youtube.com/embed/VO8G7SlD8SI?si=IwQSTunpqu4kiJcP"
    },


    "healthcare-details": {
        title: "การดูแลสุขภาพและการแพทย์",
        description: "เรียนรู้การดูแลสุขภาพและการป้องกันโรค",
        youtubeUrl: "",

        image: "./Joyful Vet Caring for Happy Retriever.png"
    },

    "training-details": {
        title: "การฝึกวินัยและการเข้าสังคม",
        description: "เรียนรู้วิธีฝึกคำสั่งพื้นฐานและพฤติกรรมที่ดี",
        youtubeUrl: "https://www.youtube.com/embed/BziB_fQQC8U?si=qH6M2O2pU1pIyCSN",

        image: "./Gemini_Generated_Image_164gxh164gxh164g(1).jpg"
    },

    "exercise-details": {
        title: "การออกกำลังกายและกิจกรรม",
        description: "ตัวอย่างกิจกรรมเพื่อสุขภาพกายและสุขภาพจิต",
        youtubeUrl: "https://www.youtube.com/embed/I7jx40xdOXc?si=dGA7hdVHGb7eS-wB",

        image: "./Gemini_Generated_Image_164gxh164gxh164g(1).jpg"
    },

    "grooming-details": {
    title: "การดูแลความสะอาดและกรูมมิ่ง",
    description: "เรียนรู้การดูแลความสะอาดและขนของน้องหมา",

    videos: [
        {
            title: "วิธีอาบน้ำสุนัขอย่างถูกวิธี",
            description: "เรียนรู้วิธีอาบน้ำและทำความสะอาดน้องหมา",
            youtubeUrl: "https://www.youtube.com/embed/Z61hqrswdDQ?si=Gl_sEULd9QUIyiC5"
        },
        {
            title: "วิธีอาบน้ำหมาใหญ่",
            description: "เรียนรู้วิธีการอาบน้ำและทำความสะอาดหมาใหญ่",
            youtubeUrl: "https://www.youtube.com/embed/E0ro3Izwbvg?si=cLLHnNH8ubw90EoA"
        }
    ],

    image: "./Gemini_Generated_Image_164gxh164gxh164g(1).jpg"
},
    "safety-details": {
        title: "สภาพแวดล้อมและความปลอดภัย",
        description: "วิธีจัดพื้นที่ให้ปลอดภัยสำหรับสุนัข",
        youtubeUrl: "",

        image: "./ความสุขอบอุ่นกับน้องโกลเด้น.png"
    }

};


/* -----------------------------------------
   2. แปลง YouTube URL เป็น Embed URL
----------------------------------------- */

function getYoutubeEmbedUrl(url) {

    if (!url) return null;

    try {

        const parsedUrl = new URL(url);

        let videoId = "";

        if (parsedUrl.hostname === "youtu.be") {

            videoId = parsedUrl.pathname.slice(1);

        } else if (
            parsedUrl.hostname.includes("youtube.com")
        ) {

            if (parsedUrl.pathname === "/watch") {

                videoId = parsedUrl.searchParams.get("v");

            } else if (
                parsedUrl.pathname.startsWith("/embed/")
            ) {

                videoId = parsedUrl.pathname.split("/")[2];

            } else if (
                parsedUrl.pathname.startsWith("/shorts/")
            ) {

                videoId = parsedUrl.pathname.split("/")[2];

            }

        }

        if (!videoId || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
            return null;
        }

        return `https://www.youtube-nocookie.com/embed/${videoId}`;

    } catch (error) {

        console.error("Invalid YouTube URL:", error);

        return null;

    }

}


/* -----------------------------------------
   3. สร้างพื้นที่ Video / Image
----------------------------------------- */


function createGuideMedia(panel) {

    const media = guideMedia[panel.id];

    if (!media) return;

    if (panel.querySelector(".detail-layout")) return;

    const layout = document.createElement("div");
    layout.className = "detail-layout";

    // ฝั่งข้อความซ้าย
    const content = document.createElement("div");
    content.className = "detail-content";

    while (panel.firstChild) {
        content.appendChild(panel.firstChild);
    }

    // ฝั่งสื่อขวา
    const mediaBox = document.createElement("aside");
    mediaBox.className = "detail-media";

    // =================================
    // กรณีมีวิดีโอ 2 ช่อง
    // =================================

    if (media.videos && media.videos.length > 0) {

        mediaBox.classList.add("multi-video");

        const videoGrid = document.createElement("div");
        videoGrid.className = "detail-video-grid";

        media.videos.forEach((item, index) => {

            const embedUrl = getYoutubeEmbedUrl(item.youtubeUrl);

            const card = document.createElement("div");
            card.className = "detail-video-card";

            if (embedUrl) {

                const iframe = document.createElement("iframe");

                iframe.src = embedUrl;
                iframe.title = item.title;
                iframe.loading = "lazy";

                iframe.allow =
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

                iframe.allowFullscreen = true;

                card.appendChild(iframe);

            } else {

                const fallback = document.createElement("div");
                fallback.className = "video-fallback";
                fallback.textContent = "ยังไม่มีวิดีโอสำหรับหัวข้อนี้";

                card.appendChild(fallback);
            }

            const caption = document.createElement("div");
            caption.className = "media-caption";

            const label = document.createElement("span");
            label.className = "media-label";
            label.textContent = `▶ VIDEO ${index + 1}`;

            const heading = document.createElement("h4");
            heading.textContent = item.title;

            const description = document.createElement("p");
            description.textContent = item.description;

            caption.append(label, heading, description);

            card.appendChild(caption);

            videoGrid.appendChild(card);

        });

        mediaBox.appendChild(videoGrid);

    }

    // =================================
    // กรณีมีวิดีโอเดียวหรือรูปภาพ
    // =================================

    else {

        const embedUrl = getYoutubeEmbedUrl(media.youtubeUrl);

        if (embedUrl) {

            const iframe = document.createElement("iframe");

            iframe.src = embedUrl;
            iframe.title = media.title;
            iframe.loading = "lazy";

            iframe.allow =
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

            iframe.allowFullscreen = true;

            mediaBox.appendChild(iframe);

        } else {

            mediaBox.classList.add("image-mode");

            const img = document.createElement("img");

            img.src = media.image;
            img.alt = media.title;
            img.loading = "lazy";

            mediaBox.appendChild(img);

        }

        const caption = document.createElement("div");
        caption.className = "media-caption";

        const label = document.createElement("span");
        label.className = "media-label";

        label.textContent = embedUrl
            ? "▶ VIDEO GUIDE"
            : "✦ IMAGE GUIDE";

        const heading = document.createElement("h4");
        heading.textContent = media.title;

        const description = document.createElement("p");
        description.textContent = media.description;

        caption.append(label, heading, description);

        mediaBox.appendChild(caption);
    }

    layout.append(content, mediaBox);

    panel.appendChild(layout);
}



/* -----------------------------------------
   4. เริ่มต้นระบบเมื่อเปิดเว็บไซต์
----------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

    const guideButtons = document.querySelectorAll(
        ".read-guide-btn"
    );

    const detailPanels = document.querySelectorAll(
        ".detail-panel"
    );

    const guideDetails = document.getElementById(
        "guideDetails"
    );


    // สร้าง Media ให้ครบทั้ง 6 หัวข้อ
    detailPanels.forEach(panel => {

        createGuideMedia(panel);

    });


    /* -------------------------------------
       5. ระบบกดเลือกหัวข้อ
    ------------------------------------- */

    guideButtons.forEach(button => {

        button.addEventListener("click", () => {

            const targetId = button.dataset.target;

            const selectedPanel = document.getElementById(
                targetId
            );

            if (!selectedPanel) return;


            // ซ่อนรายละเอียดหัวข้ออื่นทั้งหมด
            detailPanels.forEach(panel => {

                panel.hidden = true;

            });


            // แสดงเฉพาะหัวข้อที่เลือก
            selectedPanel.hidden = false;


            // เลื่อนลงมาที่รายละเอียด
            if (guideDetails) {

                guideDetails.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});
