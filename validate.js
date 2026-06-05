module.exports = async (req, res) => {
  const token = req.query.token || '';
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyQr_UhzY9m3eYhkO3DcW9HygQl4EYQ3fWqugj_ok2iaVsRdkiInpQKBQb-rm3K755Z/exec';

  try {
    const response = await fetch(
      `${SCRIPT_URL}?action=checkToken&token=${encodeURIComponent(token)}`
    );
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (e) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ valid: false, msg: 'Server error' });
  }
};
