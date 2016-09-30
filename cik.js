/*CiK (Çocuklar için Kodlama) çocukların kodlama (Programlama) kavramlarına kolayca alışabilmeleri için geliştirilmiş bir JavaScript Kütüphanesidir: http://www.cocuklaricinkodlama.com/cik
CiK Zafer Demirkol - copyright (c) - http://www.zaferdemirkol.com Tarafından geliştirilmiş bir açık kaynak kod kütüphanesidir ve tüm telif hakları Zafer Demirkol'a aittir: http://www.zaferdemirkol.com/lisans
Ticari olmayan amaçlar için serbestçe kullanılabilir. Buradaki kodlar kullanılarak herhangi bir ticari ürün veya hizmet geliştirilemez.
Bu kodlara https://github.com/zaferdemirkol/cik adresinden erişebilir, gelişmeleri takip edebilir kütüphanenin gelişmesi için katkıda bulunabilirsiniz
*/
window.cik = (function () {

    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");
    var yukaridan;
    var yandan;
    var renk;
    var genislik;
    var yukseklik;
    var ileriX;
    var ileriY;
    var renkler = {
        'kırmızı': 'red',
        'turuncu': 'orange',
        'siyah': 'black',
        'mavi': 'blue',
        'yeşil': 'green',
        'sarı': 'yellow',
        'beyaz': 'white',
        'pembe': 'pink',
        'gri': 'gray',
        'mor': 'purple',
        'kahverengi': 'brown'
    };


    function CIK(els) {

        for (var i = 0; i < els.length; i++) {
            this[i] = els[i];
        }
        this.length = els.length;

    }
    i = 0,
     length = 100;
    function sagsol (z) {      
      
        ctx.lineTo(z, ileriY);              
        ctx.stroke();
       
        
    }

    function yukariAsagi(t) {
        // ctx.clearRect(0, 0, c.width, c.height);
       
        ctx.lineTo(ileriX, t);
        ctx.stroke();
    }

    function renkKodunuAl(renk) {
        return renkler[renk.toLowerCase()] ? renkler[renk.toLowerCase()] : renk;
    }

    var cik = {

        git: {
            başlangıç: function (x, y) {
                // ctx.clearRect(0, 0, c.width, c.height);
                ileriX = x || 50;
                ileriY = y || 50;

                ctx.beginPath();
                ctx.moveTo(x, ileriY);

                return this;
            },
            sağ: function (z) {
                ileriX += z;
                sagsol(ileriX);

                return this;
            },

            sol: function (z) {
                ileriX -= z;
                sagsol(ileriX);
                return this;
            },


            aşağı: function (t) {
                ileriY += t;
                yukariAsagi(ileriY);
                return this;

            },

            yukarı: function (t) {
                ileriY -= t;
                yukariAsagi(ileriY);
                return this;

            },
            dön: function (aci) {
                ctx.clearRect(0, 0, c.width, c.height);
                ctx.rotate(aci * Math.PI / 180);
                return this;
            }


        },

        dikdörtgen: {
            yatayUzaklık: 100,
            dikeyUzaklık: 75,
            genişlik: 150,
            yükseklik:75,
            renk: "#FF0000",

            çiz: function () {
                ctx.beginPath();
                ctx.rect(this.yatayUzaklık, this.dikeyUzaklık, this.genişlik, this.yükseklik);
                ctx.fillStyle = renkKodunuAl(this.renk.toLowerCase());
                ctx.fill();
                ctx.stroke();
            }
        },

        daire: {
            yatayUzaklık: 100,
            dikeyUzaklık: 75,
            yarıçap: 50,
            renk:"#FF0000",
            çiz: function () {
                ctx.beginPath();               
                ctx.arc(this.yatayUzaklık, this.dikeyUzaklık, this.yarıçap, 0, 2 * Math.PI);
                ctx.fillStyle = renkKodunuAl(this.renk.toLowerCase());
                ctx.fill();
                ctx.stroke();

            }
        },
        
        yıldız: {
            yatayUzaklık: 75,
            dikeyUzaklık: 100,
            uçSayısı: 5,
            outerRadius: 30,
            innerRadius: 15,
            renk: "orange",


           çiz: function () {

             
               


                var rot = Math.PI / 2 * 3;
                var x = this.yatayUzaklık;
                var y = this.dikeyUzaklık;
                var step = Math.PI / this.uçSayısı;

                ctx.strokeSyle = "#000";
                ctx.beginPath();
                ctx.moveTo(this.yatayUzaklık, this.dikeyUzaklık - this.outerRadius)
                for (i = 0; i < this.uçSayısı; i++) {
                    x = this.yatayUzaklık + Math.cos(rot) * this.outerRadius;
                    y = this.dikeyUzaklık + Math.sin(rot) * this.outerRadius;
                    ctx.lineTo(x, y)
                    rot += step

                    x = this.yatayUzaklık + Math.cos(rot) * this.innerRadius;
                    y = this.dikeyUzaklık + Math.sin(rot) * this.innerRadius;
                    ctx.lineTo(x, y)
                    rot += step
                }
                ctx.lineTo(this.yatayUzaklık, this.dikeyUzaklık - this.outerRadius)
                ctx.closePath();
                ctx.lineWidth = 5;
                ctx.strokeStyle = 'red';
                ctx.stroke();
                ctx.fillStyle = renkKodunuAl(this.renk.toLowerCase());
                ctx.fill();




            }
        },
        çokgen: {
            yatayUzaklık: 150,
            dikeyUzaklık: 100,
            kenarSayısı: 5,
            kenarUzunluğu: 100,
            renk:"skyblue",

            çiz:function () {

                ctx.beginPath();
                ctx.moveTo(this.yatayUzaklık + this.kenarUzunluğu * Math.cos(0), this.dikeyUzaklık + this.kenarUzunluğu * Math.sin(0));

                for (var i = 1; i <= this.kenarSayısı; i += 1) {
                    ctx.lineTo(this.yatayUzaklık + this.kenarUzunluğu * Math.cos(i * 2 * Math.PI / this.kenarSayısı), this.dikeyUzaklık + this.kenarUzunluğu * Math.sin(i * 2 * Math.PI / this.kenarSayısı));
                }

                ctx.strokeStyle = "#000000";

                ctx.lineWidth = 3;
                ctx.stroke();

                ctx.fillStyle = renkKodunuAl(this.renk.toLowerCase());
                ctx.fill();



            }
        },
        tekrarla: function (uzunluk, icerik) {

            
            for (var i = 0; i < uzunluk; i++) {                
               
                eval(icerik)
        
            }

      
          

        },
        eğer: function (kosul, islem) {

            if (eval(kosul)) {

                eval(islem);

            }



        },
        yaz: function (metin) {


            var para = document.createElement("P");                       
            var t = document.createTextNode(metin);           
           
            para.appendChild(t);                   

            para.style.fontSize = "30px";
            //    document.body.appendChild(para);
            document.getElementById("icerik").appendChild(para)

        },


        resim: {
            balık: function (yanX, ustY) {

                var yanX = yanX || 100;
                var ustY = ustY || 100;

         var   base_image = new Image();
            base_image.src = 'images/fishu.png';
            

            base_image.onload = function () {
                ctx.drawImage(base_image, yanX, ustY);
            }
            return this;
            },
       

            git: function (yan, ust) {

                
                ctx.drawImage(base_image, yan, ust);
                return this;

            },

            dön: function (aci) {
              
                ctx.translate(150, 200);
           
               
                ctx.rotate(aci * Math.PI / 180);
                ctx.translate(-150, -200);
                return this;
            },

            köpek: function (yanX, ustY) {

                var yanX = yanX || 100;
                var ustY = ustY || 100;

                var base_image = new Image();
                base_image.src = 'images/kopek.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },

            kedi: function (yanX, ustY) {

                var yanX = yanX || 100;
                var ustY = ustY || 100;

                var base_image = new Image();
                base_image.src = 'images/kedi.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },
            penguen: function (yanX, ustY) {

                var yanX = yanX || 100;
                var ustY = ustY || 100;

                var base_image = new Image();
                base_image.src = 'images/penguen.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },
            gemi: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/gemi.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },
            tramvay: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/tramvay.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },
            karavan: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/karavan.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },

            okulOtobüsü: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/okulotobusu.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },

            elma: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/elma.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },

            limon: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/limon.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },

            portakal: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/portakal.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            }
            
        },
       

        yardım :  function () {
       
            window.open("yardim/cikYardim.html", "mywindow", "menubar=1,resizable=1,width=650,height=650");
                        return this;
                    }

        




    };





    return cik;
}());