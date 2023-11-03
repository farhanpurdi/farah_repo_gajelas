export const handleLogout = (navigate, setEmail, setPassword) => {
    const defaultEmail = 'email@example.com';
    const defaultPassword = 'password123';
  
    // Hapus Token atau Status Login
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
  
    // Arahkan Pengguna ke Halaman Login
    navigate('/Login');
  
    // Set Email dan Password ke Default
    setEmail(defaultEmail);
    setPassword(defaultPassword);
};