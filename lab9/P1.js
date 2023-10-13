import React from 'react';
function GitHubAvatar({ username }) {
    return (
        <img
            src={`https://github.com/${username}.png`}
            alt={username}
        />
    );
}
export default function Gallery() {
    const username = "Phattharawadi";

    return (
        <section>
            <h1>My GitHub Information</h1>
            <GitHubRepoURL username={username} />
            <GitHubAvatar username={username} />
        </section>
    );
}
