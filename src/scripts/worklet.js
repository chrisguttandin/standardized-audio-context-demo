class NoiseProcessor extends AudioWorkletProcessor {
    // eslint-disable-next-line class-methods-use-this
    process(_, outputs) {
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
