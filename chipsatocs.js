
<script>
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    var context = new AudioContext();

    function playSound(arr) {
        var buf = new Float32Array(arr.length)
        for (var i = 0; i < arr.length; i++) buf[i] = arr[i]
        var buffer = context.createBuffer(1, buf.length, context.sampleRate)
        buffer.copyToChannel(buf, 0)
        var source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.start(0);
    }

    function sineWaveAt(sampleNumber, tone) {
        var sampleFreq = context.sampleRate / tone
        return Math.sin(sampleNumber / (sampleFreq / (Math.PI*2)))
    }
    
    function wait(ms) {
        var start = +(new Date());
        while (new Date() - start < ms);
    }
    
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var usablePitches = [523.25, 587.32, 659.25, 698.45, 783.99, 880.00];
    
    function getPitchForTone() {
        var rng = getRandomInt(1,6)
        return usablePitches[rng - 1]
    }

    var beepshe1 = [], volume = 0.3, seconds = 0.2, tone = getPitchForTone() //261.6
    for (var i = 0; i < context.sampleRate * seconds; i++) {
        beepshe1[i] = sineWaveAt(i, tone) * volume
    }
    var beepshe2 = [], volume = 0.3, seconds = 0.2, tone = getPitchForTone() //392
    for (var i = 0; i < context.sampleRate * seconds; i++) {
        beepshe2[i] = sineWaveAt(i, tone) * volume
    }
    var beepshe3 = [], volume = 0.3, seconds = 0.2, tone = getPitchForTone() //349.2
    for (var i = 0; i < context.sampleRate * seconds; i++) {
        beepshe3[i] = sineWaveAt(i, tone) * volume
    }
    var beepshe4 = [], volume = 0.3, seconds = 0.2, tone = getPitchForTone() //523.2
    for (var i = 0; i < context.sampleRate * seconds; i++) {
        beepshe4[i] = sineWaveAt(i, tone) * volume
    }

    function line (ms, count) {
        var playcount = 0
        while (playcount < count){
            playSound(beepshe1)
            wait(ms)
            playSound(beepshe2)
            wait(ms)
            playSound(beepshe3)
            wait(ms)
            playSound(beepshe4)
            wait(ms)
            playcount++
        }
        
    }

    document.write("Hey, welcome to Chipsatocs. Grab some devices (the more the merrier), throw them the URL above and make the beepsh live happily ever after. <3<3<3"); 
    
    line(800, 4)
    
    location.reload ();
</script>
    