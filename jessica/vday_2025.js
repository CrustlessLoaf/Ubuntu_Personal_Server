document.addEventListener("DOMContentLoaded", () => {
    const videoContainer = document.getElementById("LV");
    const introVideo = document.getElementById("love");
    const mainContent = document.getElementById("mainContent");

    // Wait for the video to finish playing
    introVideo.addEventListener("loadedmetadata", () => {
        const videoDuration = introVideo.duration; // Get video duration in seconds
        const fadeOutTime = 1; // Time (in seconds) before the video ends to start fading out

        // Set a timeout to start fading out the video
        setTimeout(() => {
            videoContainer.classList.add("hidden");
        }, (videoDuration - fadeOutTime) * 1000); // Convert to milliseconds
    });

    // Ensure main content becomes visible after the video finishes
    introVideo.onended = () => {
        mainContent.classList.add("visible");
    };
});