function sendMessege() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "user_name",
    To: 'igor.82bv@mail.ru',
    From: "you@isp.com",
    Subject: "user_email",
    Body: "user_message"
  }).then(
    message => alert('Mail send!')
  );
};
