class NoiseProcessor extends AudioWorkletProcessor {

    process (_, outputs) { // eslint-disable-line class-methods-use-this
        for (const output of outputs) {
            for (const channelData of output) {
                const length = channelData.length;

                for (let i = 0; i < length; i += 1) {
                    channelData[i] = Math.random();
                }
            }
        }

        return true;
    }

}

registerProcessor('noise-processor', NoiseProcessor);
