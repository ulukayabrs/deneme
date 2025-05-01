window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script88 = function()
{
  // Storyline player değişkenlerini al
var player = GetPlayer();
var enteredId = player.GetVar("ıd");
var enteredPw = player.GetVar("pw");

console.log("Girilen Kullanıcı Adı:", enteredId);
console.log("Girilen Şifre:", enteredPw);

// Google Sheets'teki veriyi çekmek için API URL'in
var apiUrl = "https://script.google.com/macros/s/AKfycbzsqohKBNMJ1grgDqMgPHSgRq6h3uoeqOu5yAf2WUcO-EN0KqT_Pp2EKMYJcMkRXQH5/exec"; // BURAYA kendi API URL'ni koy

console.log("API URL:", apiUrl);

// Fetch ile veri çek
fetch(apiUrl)
  .then(response => {
    console.log("API Response geldi. Status:", response.status);
    if (!response.ok) {
      throw new Error('Ağ hatası: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("Veri Başarıyla Çekildi:", data);

    // Data içerisinde kullanıcı adı ve şifreyi kontrol et
    var isValid = false;
    
    for (var i = 0; i < data.length; i++) {
      console.log("Kontrol Edilen Kullanıcı:", data[i].username, data[i].password);
      if (data[i].username === enteredId && data[i].password === enteredPw) {
        isValid = true;
        break;
      }
    }

    console.log("Giriş Geçerli mi?:", isValid);

    // Sonuca göre Storyline'da değişken ayarla
    player.SetVar("login_success", isValid);

    if (isValid) {
      alert("Giriş Başarılı!");
    } else {
      alert("Kullanıcı Adı veya Şifre Hatalı!");
    }
  })
  .catch(error => {
    console.error('Veri Çekme Hatası:', error);
    alert("Sunucuya bağlanılamadı.");
    player.SetVar("login_success", false);
  });

}

window.Script89 = function()
{
  console.log("Test Başarılı: JavaScript çalıştı!");
alert("JavaScript çalıştı!");
}

window.Script90 = function()
{
  // Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbzR8QGn3_NIaoRLAOT1YflNori5aOjmTIDzF5fCMv-lhrTU5LyiQ-_zL3zTwberpzm0/exec";
const player = GetPlayer();
let feedBack = player.GetVar("UserFeedback"); // Replace "UserFeedback" with your Storyline Variable.
fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedBack})
});
}

};
