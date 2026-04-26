const ENCODE_MAP = {
  A: '\u2609',
  B: '\u2643',
  C: '\u2644',
  D: '\u2646',
  E: '\u26E2',
  F: '\u2295',
  G: '\u2640',
  H: '\u2642',
  I: '\u263F',
  J: '\u263D',
  K: '\u2649',
  L: '\u264A',
  M: '\u264B',
  N: '\u264C',
  O: '\u264D',
  P: '\u264E',
  Q: '\u264F',
  R: '\u2650',
  S: '\u2651',
  T: '\u2653',
  U: '\u2648',
  V: '\u2652',
  W: '>',
  X: '\u226B',
  Y: '\u2261',
  Z: '<'
};

const SYMBOL_NAMES = {
  A: ['Sun', 'Planet'],
  B: ['Jupiter', 'Planet'],
  C: ['Saturn', 'Planet'],
  D: ['Neptune', 'Planet'],
  E: ['Uranus', 'Planet'],
  F: ['Earth', 'Planet'],
  G: ['Venus', 'Planet'],
  H: ['Mars', 'Planet'],
  I: ['Mercury', 'Planet'],
  J: ['Moon', 'Celestial'],
  K: ['Taurus', 'Zodiac'],
  L: ['Gemini (Twins)', 'Zodiac'],
  M: ['Cancer', 'Zodiac'],
  N: ['Leo (Lion)', 'Zodiac'],
  O: ['Virgo', 'Zodiac'],
  P: ['Libra (Balance)', 'Zodiac'],
  Q: ['Scorpio', 'Zodiac'],
  R: ['Sagittarius', 'Zodiac'],
  S: ['Capricorn', 'Zodiac'],
  T: ['Pisces (Fishes)', 'Zodiac'],
  U: ['Aries (Ram)', 'Zodiac'],
  V: ['Aquarius', 'Zodiac'],
  W: ['Greater-than', 'Symbol'],
  X: ['Double Greater-than', 'Symbol'],
  Y: ['Triple Bar', 'Symbol'],
  Z: ['Less-than', 'Symbol']
};

const DECODE_MAP = {};
for (const [letter, symbol] of Object.entries(ENCODE_MAP)) {
  DECODE_MAP[symbol] = letter;
}

const SYMBOLS_SORTED = Object.keys(DECODE_MAP).sort(function(a, b) {
  return b.length - a.length;
});

const inputText   = document.getElementById('inputText');
const outputText  = document.getElementById('outputText');
const encodeBtn   = document.getElementById('encodeBtn');
const decodeBtn   = document.getElementById('decodeBtn');
const clearBtn    = document.getElementById('clearBtn');
const copyBtn     = document.getElementById('copyBtn');
const legendBtn   = document.getElementById('legendBtn');
const legendClose = document.getElementById('legendClose');
const legendCloseBtn = document.getElementById('legendCloseBtn');
const legendOverlay  = document.getElementById('legendOverlay');
const legendTable    = document.getElementById('legendTable');
const inputCount  = document.getElementById('inputCount');
const outputCount = document.getElementById('outputCount');
const statusMsg   = document.getElementById('statusMsg');
const statusMode  = document.getElementById('statusMode');
const toast       = document.getElementById('toast');

function encode(text) {
  return text.toUpperCase().split('').map(function(ch) {
    return ENCODE_MAP[ch] !== undefined ? ENCODE_MAP[ch] : ch;
  }).join('');
}

function decode(text) {
  var result = '';
  var i = 0;
  while (i < text.length) {
    var matched = false;
    for (var s = 0; s < SYMBOLS_SORTED.length; s++) {
      var sym = SYMBOLS_SORTED[s];
      if (text.substr(i, sym.length) === sym) {
        result += DECODE_MAP[sym];
        i += sym.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result += text[i];
      i++;
    }
  }
  return result;
}

function updateCount(el, countEl) {
  var n = el.value.length;
  countEl.textContent = n + (n === 1 ? ' char' : ' chars');
}

function setStatus(msg) {
  statusMsg.textContent = msg;
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 2000);
}

function shakeInput() {
  inputText.classList.remove('error-shake');
  void inputText.offsetWidth;
  inputText.classList.add('error-shake');
  setTimeout(function() { inputText.classList.remove('error-shake'); }, 400);
}

encodeBtn.addEventListener('click', function() {
  var raw = inputText.value;
  if (!raw.trim()) {
    shakeInput();
    setStatus('Error: Input is empty.');
    return;
  }
  outputText.value = encode(raw);
  updateCount(outputText, outputCount);
  statusMode.textContent = 'Encode mode';
  setStatus('Encoded successfully. ' + outputText.value.length + ' chars output.');
});

decodeBtn.addEventListener('click', function() {
  var raw = inputText.value;
  if (!raw.trim()) {
    shakeInput();
    setStatus('Error: Input is empty.');
    return;
  }
  outputText.value = decode(raw);
  updateCount(outputText, outputCount);
  statusMode.textContent = 'Decode mode';
  setStatus('Decoded successfully. ' + outputText.value.length + ' chars output.');
});

clearBtn.addEventListener('click', function() {
  inputText.value = '';
  outputText.value = '';
  updateCount(inputText, inputCount);
  updateCount(outputText, outputCount);
  setStatus('Cleared.');
  inputText.focus();
});

copyBtn.addEventListener('click', function() {
  if (!outputText.value) {
    setStatus('Nothing to copy.');
    return;
  }
  navigator.clipboard.writeText(outputText.value).then(function() {
    showToast('Copied to clipboard!');
    setStatus('Output copied to clipboard.');
  }).catch(function() {
    outputText.select();
    document.execCommand('copy');
    showToast('Copied!');
    setStatus('Output copied.');
  });
});

inputText.addEventListener('input', function() {
  updateCount(inputText, inputCount);
});

function buildLegend() {
  var letters = Object.keys(ENCODE_MAP);
  var html = '<thead><tr><th>Letter</th><th>Symbol</th><th>Name</th><th>Type</th></tr></thead><tbody>';
  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    var symbol = ENCODE_MAP[letter];
    var info   = SYMBOL_NAMES[letter];
    html += '<tr>';
    html += '<td class="td-letter">' + letter + '</td>';
    html += '<td class="td-symbol">' + symbol + '</td>';
    html += '<td class="td-name">' + info[0] + '</td>';
    html += '<td class="td-type">' + info[1] + '</td>';
    html += '</tr>';
  }
  html += '</tbody>';
  legendTable.innerHTML = html;
}

function openLegend() {
  legendOverlay.classList.add('open');
}

function closeLegend() {
  legendOverlay.classList.remove('open');
}

legendBtn.addEventListener('click', openLegend);
legendClose.addEventListener('click', closeLegend);
legendCloseBtn.addEventListener('click', closeLegend);
legendOverlay.addEventListener('click', function(e) {
  if (e.target === legendOverlay) closeLegend();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLegend();
});

buildLegend();
updateCount(inputText, inputCount);
updateCount(outputText, outputCount);