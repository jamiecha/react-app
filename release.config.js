module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/jamiecha/react-app",
    plugins: [
        '@semantic-release/commit-analyser',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github'  // Create a github release
    ]
}