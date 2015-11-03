function kodTamamlama() {




    var editordenGelenMetin = satirIcerik.split(' ').join('');


    function intellisenseOlustur() {
        intellisense = new CodeMirrorIntellisense(editor);
        intellisense.addDeclarationTrigger({ keyCode: 190 }); // `.`
        intellisense.addMethodsTrigger({ keyCode: 57, shiftKey: true }); // `(`
        intellisense.addMethodsTrigger({ keyCode: 48, shiftKey: true });// `)`
        intellisense.addMethodsTrigger({ keyCode: 8 }); // `backspace`               

    }

    

    switch (editordenGelenMetin) {
        case "cik":


            intellisenseOlustur();
            intellisense.onDeclaration(function (item) {


                var data = [
                    { glyph: 3, name: 'yaz()', documentation: 'yaz', documentation: '("metin") Girilen metni yazar' },
                    { glyph: 4, name: 'git', documentation: 'Bir çizim yapılacağını belirtir "başlangıç" metodu ile kullanılır' },
                    { glyph: 4, name: 'dikdörtgen', documentation: 'Dikdörtgen çizer (yanUzaklık, yukarıUzaklık, genişlik, yükseklik, rengi) parametrelerini alır' },
                    { glyph: 4, name: 'daire', documentation: 'Daire çizer (yanUzaklık, yukarıUzaklık, yarıçap,  rengi) parametrelerini alır' },
                    { glyph: 4, name: 'yıldız', documentation: 'Yıldız çizer (yanUzaklık, yukarıUzaklık, YıldızUçSayısı) parametrelerini alır' },
                    { glyph: 4, name: 'çokgen', documentation: 'Çokgen çizer (yanUzaklık, yukarıUzaklık, kenarSayısı, kenarUzunluğu) parametrelerini alır' },
                    { glyph: 3, name: 'tekrarla()', documentation: 'Belirtilen sayıda tekrar yapar ("tekrar sayısı", "yapılacak iş")' },
                     { glyph: 3, name: 'eğer()', documentation: 'Koşul (koşul ifadesi, "yapılacak iş")' },
                     { glyph: 4, name: 'resim', documentation: 'Resim ekler' },
                     { glyph: 3, name: 'yardım()', documentation: 'Yardım penceresi açar' }
                ];
                intellisense.setDeclarations(data);
            });
            break;


        case "cik.daire":

            intellisenseOlustur();

            intellisense.onDeclaration(function (item) {
                var data = [
                    { glyph: 3, name: 'çiz()', documentation: 'Daire çizer' },
                    { glyph: 4, name: 'yarıçap', documentation: 'Yarıçap değeri' },
                    { glyph: 4, name: 'yatayUzaklık', documentation: 'Daire merkezinin yatay uzaklığı' },
                      { glyph: 4, name: 'dikeyUzaklık', documentation: 'Daire merkezinin dikey uzaklığı' },
                        { glyph: 4, name: 'renk', documentation: 'Dairenin rengi' }
                ];
                intellisense.setDeclarations(data);


            });
            break;

        case "cik.dikdörtgen":

            intellisenseOlustur();

            intellisense.onDeclaration(function (item) {
                var data = [
                    { glyph: 3, name: 'çiz()', documentation: 'Dikdörtgen çizer' },
                    { glyph: 4, name: 'genişlik', documentation: 'Dikdörtgenin genişliği' },
                    { glyph: 4, name: 'yükseklik', documentation: 'Dikdörtgenin yüksekliği' },
                    { glyph: 4, name: 'yatayUzaklık', documentation: 'Dikdörtgenin yatay uzaklığı' },
                      { glyph: 4, name: 'dikeyUzaklık', documentation: 'Dikdörtgenin dikey uzaklığı' },
                        { glyph: 4, name: 'renk', documentation: 'Dikdörtgenin rengi' }
                ];
                intellisense.setDeclarations(data);


            });
            break;

        case "cik.yıldız":

            intellisenseOlustur();

            intellisense.onDeclaration(function (item) {
                var data = [
                    { glyph: 3, name: 'çiz()', documentation: 'Yıldız çizer' },
                    
                    { glyph: 4, name: 'yatayUzaklık', documentation: 'Yıldızın yatay uzaklığı' },
                      { glyph: 4, name: 'dikeyUzaklık', documentation: 'Yıldızın dikey uzaklığı' },
                        { glyph: 4, name: 'uçSayısı', documentation: 'Yıldızın uç sayısı' },
                        { glyph: 4, name: 'renk', documentation: 'Yıldızın rengi' }
                ];
                intellisense.setDeclarations(data);


            });
            break;
        case "cik.çokgen":

            intellisenseOlustur();

            intellisense.onDeclaration(function (item) {
                var data = [
                    { glyph: 3, name: 'çiz()', documentation: 'Çokgen çizer' },

                    { glyph: 4, name: 'yatayUzaklık', documentation: 'Çokgenin yatay uzaklığı' },
                      { glyph: 4, name: 'dikeyUzaklık', documentation: 'Çokgenin dikey uzaklığı' },
                        { glyph: 4, name: 'kenarSayısı', documentation: 'Çokgenin kenar sayısı' },
                         { glyph: 4, name: 'kenarUzunluğu', documentation: 'Çokgenin kenar uzunluğu' },
                          { glyph: 4, name: 'renk', documentation: 'Çokgenin rengi' }
                ];
                intellisense.setDeclarations(data);


            });
            break;

        case "cik.git":

            intellisenseOlustur();

            intellisense.onDeclaration(function (item) {
                var data = [
                    { glyph: 3, name: 'başlangıç', documentation: 'İmleçi x,y koordinatında konumlandırır (x,y)' }
                ];
                intellisense.setDeclarations(data);


            });
            break;

        case editordenGelenMetin.match(/(cik.git.başlangıç)?/)[1]:

            intellisenseOlustur();

            intellisense.onDeclaration(function (item) {
                var data = [
                    { glyph: 3, name: 'sağ', documentation: 'Girilen değer kadar sağ yöne gider' },
                    { glyph: 3, name: 'sol', documentation: 'Girilen değer kadar sol yöne gider' },
                    { glyph: 3, name: 'aşağı', documentation:'Girilen değer kadar aşağı yöne gider' },
                    { glyph: 3, name: 'yukarı', documentation:'Girilen değer yukarı aşağı yöne gider' }
                ];
                intellisense.setDeclarations(data);


            });
            break;

        case "cik.resim":

            intellisenseOlustur();

            intellisense.onDeclaration(function (item) {
                var data = [
                    { glyph: 3, name: 'balık()', documentation: 'Balık resmi ekler' },
                     { glyph: 3, name: 'köpek()', documentation: 'Köpek resmi ekler' },
                     { glyph: 3, name: 'kedi()', documentation: 'Kedi resmi ekler' },
                     { glyph: 3, name: 'penguen()', documentation: 'Penguen resmi ekler' },
                     { glyph: 3, name: 'gemi()', documentation: 'Gemi resmi ekler' },
                      { glyph: 3, name: 'tramvay()', documentation: 'Tramvay resmi ekler' },
                      { glyph: 3, name: 'karavan()', documentation: 'Karavan resmi ekler' },
                      { glyph: 3, name: 'okulOtobüsü()', documentation: 'Okul otobüsü resmi ekler' },
                      { glyph: 3, name: 'elma()', documentation: 'Elma resmi ekler' },
                       { glyph: 3, name: 'limon()', documentation: 'Limon resmi ekler' },
                        { glyph: 3, name: 'portakal()', documentation: 'Portakal resmi ekler' }
                ];
                intellisense.setDeclarations(data);

               
            });
            break;
      

        default:

    }





}