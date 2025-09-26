



export const login = (req, res) => {
    // Simulate a login process
    const { username } = req.body;
    
    if (!username) {
        return res.status(400).json({ message: 'Username required' });
    }
    else if (username === req.body.username) {
        req.session.user = { username };
        res.cookie("username", username, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 // 1 day
        });
        return res.status(200).json({ message: 'Login successful', user: req.session.user });
    }
    
    return res.status(401).json({ message: 'Invalid credentials' });
}

export const logout = (req, res) => {
    // simulate a lgout process
    res.clearCookie("username");
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed', error: err.message });
        }
        res.status(200).json({ message: 'Logout successful' });
    })
}