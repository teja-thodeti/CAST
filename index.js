const videolinks =[
    "https://youtu.be/QYJupzlZX4s?si=eYR5MPvQZ5D5jutd", // for container kalki
    "https://youtu.be/G5RpJwCJDqc?si=-zdruzmoS2A0ZxAu", // for container japan
    "https://youtu.be/H2ayCcc6B9s?si=0Eh-r-pdndMYvVXY", // for contianer A10
    "https://youtu.be/lj5GXZaE7qs?si=BHkkcfuKJAdIRFBH", // for container cold
    "https://youtu.be/VQRLujxTm3c?si=xay7ogNd295w0jb7", // for container Gta 6
    "https://youtu.be/VHAK-gU9gi0?si=7X4WBYbEPInkPCtO", // for container Deadpool
    "https://youtu.be/WdJub3Kz2wI?si=qWIkFhu9Us4BD-Z7", // for container Ghost recon
    "https://youtu.be/3XFODda6YXo?si=Hxu6Od4T-3dmG977", // for container AWS
    "https://youtu.be/XZmGGAbHqa0?si=L1sEjaEEa06jd5Vk", // for container Datacenter
    "https://youtu.be/U5hVonXu51g?si=0OpgSEV-9uK4jxwL", // for container TOD
    "https://youtu.be/jpX04R596o4?si=OpMO26yLpZ3mMNbT", // for container speed
    "https://youtu.be/eaW0tYpxyp0?si=c1w6J_Lanqf9Yo3k", // for container RDR2

];
document.querySelectorAll("#js-video-preview").forEach((video,index) =>{
    video.addEventListener("click",() =>{
        window.open(videolinks[index],"_blank");
    });
});