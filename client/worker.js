self.addEventListener("push", e => {
    const data = e.data.json();
    console.log("Received push notification");
    self.registration.showNotification(data.title, {
      body: "Notified by Lanware!",
      icon: "https://media-exp1.licdn.com/dms/image/C560BAQG5TyJeEvBElw/company-logo_200_200/0/1601884873735?e=2147483647&v=beta&t=120ANPbc5ibSRseD_4bYfb07hmcZUqzc8Swn9DuenIs"
    });
  });