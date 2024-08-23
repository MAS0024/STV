const canales = [
    {
        title: "TV Publica",
        imgSrc: "img/TVP.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Q2FuYWw3&lang=1",
            "https://streamtp.live/global1.php?stream=tv_publica"
        ]
    },
    {
        title: "America TV",
        imgSrc: "img/AmericaTV.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=QW1lcmljYVRW&lang=1"
        ]
    },
    {
        title: "El Nueve",
        imgSrc: "img/ElNueve.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Q2FuYWw5&lang=1"
        ]
    },
    {
        title: "Telefe",
        imgSrc: "img/telefe.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=VGVsZWZlSEQ=&lang=1"
        ]
    },
    {
        title: "El Trece",
        imgSrc: "img/Trece.svg",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=QXJ0ZWFySEQ&lang=1"
        ]
    },
    {
        title: "CronicaTV",
        imgSrc: "img/Cronica.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Q3JvbmljYVRW&lang=1",
            "https://www.youtube.com/embed/avly0uwZzOE?feature=oembed&"
        ]
    },
    {
        title: "C5N",
        imgSrc: "img/C5N.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=QzVO&lang=1",
            "https://www.youtube.com/embed/NdQSOItOQ5Y?feature=oembed&"
        ]
    },
    {
        title: "TN",
        imgSrc: "img/TN.svg",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=VG9kb05vdGljaWFz&lang=1"
        ]
    },
    {
        title: "C26",
        imgSrc: "img/C26.svg",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=MjZfVFZfSEQ&lang=1"
        ]
    },
    {
        title: "DeporTV",
        imgSrc: "img/DeporTV.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RGVwb3JUVkhE&lang=1"
        ]
    },
    {
        title: "ESPN",
        imgSrc: "img/ESPN.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RVNQTjJIRA&lang=1",
            "https://streamtp.live/global1.php?stream=espn1"
        ]
    },
    {
        title: "ESPN2",
        imgSrc: "img/ESPN2.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RVNQTjJfQXJn&lang=1",
            "https://streamtp.live/global1.php?stream=espn2"
        ]
    },
    {
        title: "ESPN3",
        imgSrc: "img/ESPN3.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RVNQTjM&lang=1",
            "https://streamtp.live/global1.php?stream=espn3"
        ]
    },
    {
        title: "Fox Sports 1",
        imgSrc: "img/FoxSports.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Rm94U3BvcnRz&lang=1",
            "https://streamtp.live/global1.php?stream=fox1ar"
        ]
    },
    {
        title: "Fox Sports 2",
        imgSrc: "img/FoxSports2.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Rm94U3BvcnRzMkhE&lang=1",
            "https://streamtp.live/global1.php?stream=fox2ar"
        ]
    },
    {
        title: "Fox Sports 3",
        imgSrc: "img/FoxSports3.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Rm94U3BvcnRzM0hE&lang=1",
            "https://streamtp.live/global1.php?stream=fox3ar"
        ]
    },
    {
        title: "TNT Sport Argentina",
        imgSrc: "img/TNTSports.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=VE5UX1Nwb3J0c19IRA&lang=1",
            "https://streamtp.live/global1.php?stream=tntsports_argentina"
        ]
    },
    {
        title: "Espn Premium",
        imgSrc: "img/ESPNPremium.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Rm94X1Nwb3J0c19QcmVtaXVuX0hE&lang=1",
            "https://streamtp.live/global1.php?stream=espn_premium"
        ]
    },
    {
        title: "TyC Sports",
        imgSrc: "img/TyCSports.svg",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=VHlDU3BvcnQ&lang=1",
            "https://streamtp.live/global1.php?stream=tyc_sports"
        ]
    },
    {
        title: "DsSport",
        imgSrc: "img/DSports.png",
        sources: [
            "img/00.png",
            "https://streamtp.live/global1.php?stream=dsports"
        ]
    },
    {
        title: "DsSport 2",
        imgSrc: "img/DSports2.png",
        sources: [
            "img/00.png",
            "https://streamtp.live/global1.php?stream=dsports_2"
        ]
    },
    {
        title: "DsSport Plus",
        imgSrc: "img/DSportsPlus.webp",
        sources: [
            "img/00.png",
            "https://streamtp.live/global1.php?stream=dsports_plus"
        ]
    },
    {
        title: "Liga 1",
        imgSrc: "img/L1Max.png",
        sources: [
            "img/00.png",
            "https://streamtp.live/global1.php?stream=l1max"
        ]
    },
    {
        title: "FoxSport Premium",
        imgSrc: "img/FoxSportsPremium.png",
        sources: [
            "img/00.png",
            "https://streamtp.live/global1.php?stream=foxsportspremium"
        ]
    },
    {
        title: "Win Sports +",
        imgSrc: "img/WinSports+.png",
        sources: [
            "img/00.png",
            "https://streamtp.live/global1.php?stream=winplus"
        ]
    },
    {
        title: "TUDN",
        imgSrc: "img/TUDN.png",
        sources: [
            "img/00.png",
            "https://betzta.com/canales.php?stream=tudn"
        ]
    },
    {
        title: "Claro",
        imgSrc: "img/ClaroVideo.png",
        sources: [
            "https://clarovideo.forlessmake.store/claro_video.html?get=aHR0cHM6Ly9sYXRhbXZvc2xpdmVjbGFyb3ZpZGVvLmFrYW1haXplZC5uZXQvQ29udGVudC9EQVNIX0RBU0hfRksvTGl2ZS9DaGFubmVsKENMQVJPX1NQT1JUU19MQVRBTV9IRCkvbWFuaWZlc3QubXBk&key=NzRjZGNiNjNmZjNlNGYzY2U0ZGE0MjQzYjZkMWUxZDg=&key2=OWI4MzY2ZmE4ZTllYmNkZjRiMzQ5ZDZjOWQ1MjgxMTU="
        ]
    },
    {
        title: "MTV",
        imgSrc: "img/MTV.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=TVRWX0hE",
        ]
    },
    {
        title: "MTV Hits",
        imgSrc: "img/mtvhits.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=TVRWX0hpdHM=",
        ]
    },
    {
        title: "MTV 00s",
        imgSrc: "img/mtv00s.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=TVRWMDA=",
        ]
    },
    {
        title: "TNT",
        imgSrc: "img/TNT.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=VE5UX0hEX0FyZw&lang=1",
        ]
    },
    {
        title: "FX",
        imgSrc: "img/FX.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RlhIRA==&lang=1",
        ]
    },
    {
        title: "Cinemax",
        imgSrc: "img/Cinemax.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Q2luZW1heA==&lang=1",
        ]
    },
    {
        title: "Cinecanal",
        imgSrc: "img/Cinecanal.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Q2luZWNhbmFsSEQ=&lang=1",
        ]
    },
    {
        title: "StarChannel",
        imgSrc: "img/StarChannel.svg.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Rk9YSEQ=&lang=1",
        ]
    },
    {
        title: "Space",
        imgSrc: "img/Space.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=U3BhY2U=&lang=1",
        ]
    },
    {
        title: "Studio Universal",
        imgSrc: "img/StudioUniversal.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=U3R1ZGlvX1VuaXZlcnNhbA==&lang=1",
        ]
    },
    {
        title: "Sony Channel",
        imgSrc: "img/SonyChannel.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=U29ueUhE&lang=1",
        ]
    },
    {
        title: "Paramount Network",
        imgSrc: "img/Paramount_Network.svg",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=UGFyYW1vdW50&lang=1",
        ]
    },
    {
        title: "HBO",
        imgSrc: "img/hbo_logo.svg.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=SEJPSEQ=&lang=1",
        ]
    },
    {
        title: "HBO 2",
        imgSrc: "img/hbo2.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=SEJPXzI=",
        ]
    },
    {
        title: "HBO Plus",
        imgSrc: "img/hboplus.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=SEJPX1BsdXM=",
        ]
    },
    {
        title: "HBO Family",
        imgSrc: "img/hbofamily.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=SEJPX0ZhbWlseQ==",
        ]
    },
    {
        title: "HBO Xtreme",
        imgSrc: "img/hboxtreme.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=SEJPX0V4dHJlbWU=",
        ]
    },
    {
        title: "HBO Mundi",
        imgSrc: "img/hbomundi.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=SEJPX011bmRp",
        ]
    },
    {
        title: "HBO Pop",
        imgSrc: "img/hbopop.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=SEJPX1BPUA==",
        ]
    },
    {
        title: "HBO Signature",
        imgSrc: "img/hbosignature.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=SEJPX1NpZ25hdHVyZQ==",
        ]
    },
    {
        title: "Universal +",
        imgSrc: "img/Universal_TV.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=VW5pdmVyc2FsX0NoYW5uZWxfSEQ=",
        ]
    },
    {
        title: "Universal Premiere",
        imgSrc: "img/Universal_Premiere.svg",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=VW5pdmVyc2FsX1ByZW1pZXJl&lang=1",
        ]
    },
    {
        title: "Warner Channel",
        imgSrc: "img/Warner.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=V2FybmVySEQ="

        ]
    }
];
