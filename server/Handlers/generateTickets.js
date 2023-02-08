const randomString = (length, chars) => {
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  };
  
  const ticket = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return randomString(12, chars);
  };
  
  const tickets = [];
  for (let i = 0; i < 5; i++) {
    tickets.push(ticket());
  }
  
  console.log(tickets);
  