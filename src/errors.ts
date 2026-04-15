export class EnverifyError extends Error {
    public readonly failures : string[]

    constructor(failures: string[]) {
        const message = [
            '\n✗ enverify validation failed:\n',
            ...failures.map(f => `  → ${f}`),
            '\nFix the above environment variables before starting the app.\n'
        ].join('\n')

        super(message)
        this.name = 'EnverifyError'
        this.failures = failures

        Object.setPrototypeOf(this, EnverifyError.prototype)
    }
}