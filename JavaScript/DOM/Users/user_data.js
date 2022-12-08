let employees =[{"id":1,"name":"Lionello Courtliff","email":"lcourtliff0@infoseek.co.jp","gender":"Male"},
{"id":2,"name":"Christiana Blackadder","email":"cblackadder1@scribd.com","gender":"Female"},
{"id":3,"name":"Tani Sibbering","email":"tsibbering2@house.gov","gender":"Female"},
{"id":4,"name":"Cynthia Ody","email":"cody3@smh.com.au","gender":"Female"},
{"id":5,"name":"Portie Sheilds","email":"psheilds4@bluehost.com","gender":"Male"},
{"id":6,"name":"Shep Lampard","email":"slampard5@theguardian.com","gender":"Male"},
{"id":7,"name":"Hermia Clissold","email":"hclissold6@prweb.com","gender":"Female"},
{"id":8,"name":"Birdie Berndtssen","email":"bberndtssen7@parallels.com","gender":"Female"},
{"id":9,"name":"Anthea Byron","email":"abyron8@imageshack.us","gender":"Female"},
{"id":10,"name":"Sigismond Gopsell","email":"sgopsell9@opera.com","gender":"Male"},
{"id":11,"name":"Penny Connue","email":"pconnuea@cornell.edu","gender":"Female"},
{"id":12,"name":"Edward Godin","email":"egodinb@squidoo.com","gender":"Male"},
{"id":13,"name":"Joete Johnston","email":"jjohnstonc@devhub.com","gender":"Non-binary"},
{"id":14,"name":"Catherine Bathersby","email":"cbathersbyd@privacy.gov.au","gender":"Female"},
{"id":15,"name":"Melinde Maskell","email":"mmaskelle@tinypic.com","gender":"Female"},
{"id":16,"name":"Carry Juppe","email":"cjuppef@plala.or.jp","gender":"Female"},
{"id":17,"name":"Paola Drewry","email":"pdrewryg@cyberchimps.com","gender":"Female"},
{"id":18,"name":"Asia Lumm","email":"alummh@gnu.org","gender":"Female"},
{"id":19,"name":"Faber Peever","email":"fpeeveri@skype.com","gender":"Male"},
{"id":20,"name":"Wat Goodlatt","email":"wgoodlattj@w3.org","gender":"Male"},
{"id":21,"name":"Corry Greenaway","email":"cgreenawayk@ustream.tv","gender":"Female"},
{"id":22,"name":"Eada Joreau","email":"ejoreaul@bluehost.com","gender":"Bigender"},
{"id":23,"name":"Brendan Perutto","email":"bperuttom@domainmarket.com","gender":"Male"},
{"id":24,"name":"Paloma Pindar","email":"ppindarn@amazonaws.com","gender":"Female"},
{"id":25,"name":"Colette Glowacki","email":"cglowackio@princeton.edu","gender":"Female"},
{"id":26,"name":"Wilmar MacGaffey","email":"wmacgaffeyp@epa.gov","gender":"Male"},
{"id":27,"name":"Morganica Hause","email":"mhauseq@msn.com","gender":"Female"},
{"id":28,"name":"Miltie Cheves","email":"mchevesr@wix.com","gender":"Genderqueer"},
{"id":29,"name":"Babette Eagan","email":"beagans@china.com.cn","gender":"Female"},
{"id":30,"name":"Aidan Antonik","email":"aantonikt@npr.org","gender":"Female"},
{"id":31,"name":"Misti Rossin","email":"mrossinu@wunderground.com","gender":"Female"},
{"id":32,"name":"Blaire Possel","email":"bposselv@printfriendly.com","gender":"Female"},
{"id":33,"name":"Sherwin Habeshaw","email":"shabeshaww@wikia.com","gender":"Male"},
{"id":34,"name":"Noelle Dryburgh","email":"ndryburghx@yale.edu","gender":"Female"},
{"id":35,"name":"Candi Stoffels","email":"cstoffelsy@naver.com","gender":"Female"},
{"id":36,"name":"Zaccaria Casino","email":"zcasinoz@nationalgeographic.com","gender":"Male"},
{"id":37,"name":"Jennilee Staggs","email":"jstaggs10@wisc.edu","gender":"Female"},
{"id":38,"name":"Alys Edgett","email":"aedgett11@gmpg.org","gender":"Female"},
{"id":39,"name":"Etienne Mattocks","email":"emattocks12@soundcloud.com","gender":"Male"},
{"id":40,"name":"Dalia Perllman","email":"dperllman13@weibo.com","gender":"Female"},
{"id":41,"name":"Mellicent Boatwright","email":"mboatwright14@flavors.me","gender":"Female"},
{"id":42,"name":"Nikola Tench","email":"ntench15@who.int","gender":"Male"},
{"id":43,"name":"Ingelbert Oldacre","email":"ioldacre16@qq.com","gender":"Male"},
{"id":44,"name":"Patty Kainz","email":"pkainz17@smh.com.au","gender":"Male"},
{"id":45,"name":"Bette Barlace","email":"bbarlace18@newsvine.com","gender":"Female"},
{"id":46,"name":"Frayda Ganiford","email":"fganiford19@fema.gov","gender":"Female"},
{"id":47,"name":"Barthel Ugo","email":"bugo1a@merriam-webster.com","gender":"Male"},
{"id":48,"name":"Zolly Pallas","email":"zpallas1b@issuu.com","gender":"Male"},
{"id":49,"name":"Frederick Grellier","email":"fgrellier1c@sakura.ne.jp","gender":"Male"},
{"id":50,"name":"Angel McKennan","email":"amckennan1d@dropbox.com","gender":"Agender"}]
function displaydata(){
    let row = ""
    for (emp of employees){
        row = row + 
            `<tr>
                <td> ${emp.id} </td>
                <td> ${emp.name} </td>
                <td> ${emp.email} </td>
                <td> ${emp.gender} </td>
            </tr>`
    }    
    document.getElementById('asd').innerHTML=row
}