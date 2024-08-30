const canales = [
    {
        title: "LN+",
        imgSrc: "img/LN+.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=TGFfTmFjaW9u&lang=1",
            "https://www.youtube.com/watch?v=G5pHuBCqgrs"
        ]
    },
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
        title: "A24",
        imgSrc: "img/A24.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=QW1lcmljYTI0&lang=1"
        ]
    },
    {
        title: "DTV (Diputados)",
        imgSrc: "img/DTV.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RGlwdXRhZG9zX1RW",
            "https://7tv.mitele.uno/cv2.php?get=RGlwdXRhZG9zX1RW&lang=1"
        ]
    },
    {
        title: "Volver",
        imgSrc: "img/Volver.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Vm9sdmVy&lang=1",
            "https://7tv.mitele.uno/cv2.php?get=Vm9sdmVy"
        ]
    },
    {
        title: "CineAr",
        imgSrc: "img/CineAr.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=SU5DQUFfVHY=&lang=1",
            "https://7tv.mitele.uno/cv2.php?get=SU5DQUFfVHY="
        ]
    },
    {
        title: "TeleMax",
        imgSrc: "img/Telemax.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=VGVsZW1heA&lang=1",
            "https://7tv.mitele.uno/cv2.php?get=VGVsZW1heA"
        ]
    },
    {
        title: "Ciudad Megazine",
        imgSrc: "img/ciudad.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=TWFnYXppbmU=&lang=1",
            "https://7tv.mitele.uno/cv2.php?get=TWFnYXppbmU="
            
        ]
    },
    {
        title: "GarageTV",
        imgSrc: "img/GarageTV.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RWxfR2FyYWdl&lang=1",
            "https://7tv.mitele.uno/cv2.php?get=RWxfR2FyYWdl"
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
        title: "NBA",
        imgSrc: "img/NBA.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=TkJBX1RW&lang=1",
            "https://7tv.mitele.uno/cv2.php?get=TkJBX1RW"
        ]
    },
    {
        title: "ESPN",
        imgSrc: "img/ESPN.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RVNQTjJIRA&lang=1",
            "https://streamtp.live/global1.php?stream=espn1"
        ]
    },
    {
        title: "ESPN2",
        imgSrc: "img/ESPN2.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RVNQTjJfQXJn&lang=1",
            "https://streamtp.live/global1.php?stream=espn2"
        ]
    },
    {
        title: "ESPN3",
        imgSrc: "img/ESPN3.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RVNQTjM&lang=1",
            "https://streamtp.live/global1.php?stream=espn3"
        ]
    },
    {
        title: "ESPN4",
        imgSrc: "img/ESPN4.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RVNQTkhE&lang=1",
            "https://streamtp.live/global1.php?stream=espn4"
        ]
    },
    {
        title: "ESPN5",
        imgSrc: "img/ESPN5.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=RVNQTjQ=&lang=1",
            "https://streamtp.live/global1.php?stream=espn5"
        ]
    },
    {
        title: "ESPN6",
        imgSrc: "img/ESPN6.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Rm94U3BvcnRzM19VWQ==&lang=1",
            "https://streamtp.live/global1.php?stream=espn6"
        ]
    },
    {
        title: "ESPN7",
        imgSrc: "img/ESPN7.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Rm94U3BvcnRzMl9VWQ==&lang=1",
            "https://streamtp.live/global1.php?stream=espn7"
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
            "img/NO.png",
            "https://streamtp.live/global1.php?stream=dsports"
        ]
    },
    {
        title: "DsSport 2",
        imgSrc: "img/DSports2.png",
        sources: [
            "img/NO.png",
            "https://streamtp.live/global1.php?stream=dsports_2"
        ]
    },
    {
        title: "DsSport +",
        imgSrc: "img/DSportsPlus.webp",
        sources: [
            "img/NO.png",
            "https://streamtp.live/global1.php?stream=dsports_plus"
        ]
    },
    {
        title: "Liga 1",
        imgSrc: "img/L1Max.png",
        sources: [
            "img/NO.png",
            "https://streamtp.live/global1.php?stream=l1max"
        ]
    },
    {
        title: "FoxSport Premium",
        imgSrc: "img/FoxSportsPremium.png",
        sources: [
            "img/NO.png",
            "https://streamtp.live/global1.php?stream=foxsportspremium"
        ]
    },
    {
        title: "Win Sports +",
        imgSrc: "img/WinSports+.png",
        sources: [
            "img/NO.png",
            "https://streamtp.live/global1.php?stream=winplus"
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
        title: "HTV",
        imgSrc: "img/HTV.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=SFRW&lang=1",
            "https://7tv.mitele.uno/cv2.php?get=SFRW"
        ]
    },
    {
        title: "Quiero Musica",
        imgSrc: "img/quiero.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=UXVpZXJvX0hE&lang=1",
            "https://7tv.mitele.uno/cv2.php?get=UXVpZXJvX0hE"
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
        title: "CM",
        imgSrc: "img/CM.webp",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=Q00=&lang=1",
            "https://7tv.mitele.uno/cv2.php?get=Q00="
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
        title: "Warner Channel",
        imgSrc: "img/Warner.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=V2FybmVySEQ="

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
        title: "Universal Cinema",
        imgSrc: "img/Universal_Cinema.svg",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=VW5pdmVyc2FsX0NpbmVtYQ==&lang=1",
        ]
    },
    {
        title: "Universal Crime",
        imgSrc: "img/Universal_Crime.svg",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=dW5pdmVyc2FsX0NyaW1l&lang=1",
        ]
    },
    {
        title: "Universal Comedy",
        imgSrc: "img/Universal_Comedy.svg",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=VW5pdmVyc2FsX0NvbWVkeQ==&lang=1",
        ]
    },
    {
        title: "Universal Reality",
        imgSrc: "img/Universal_Reality.svg",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=VW5pdmVyc2FsX1JlYWxpdHk=&lang=1",
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
        title: "Adult Swim",
        imgSrc: "img/adultswim.png",
        sources: [
            "https://7tv.mitele.uno/cv2.php?get=QWR1bHRfU3dpbQ==&lang=1",
            "https://7tv.mitele.uno/cv2.php?get=QWR1bHRfU3dpbQ==",
        ]
    }
    
];
