const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const videoItem = document.getElementById('video');

function clickBtn() {
    const video1 = 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_5MB.mp4'
    const video2 = ''

    if (videoItem.src === video1) {
        videoItem.src = video2;
    } else {
        videoItem.src = video1;
    }
}

prevBtn.onclick = clickBtn
nextBtn.onclick = clickBtn
