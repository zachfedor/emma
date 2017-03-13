import React from 'react';
import 'app/About.css';

const About = () => {
  return (
    <main className="About">
      <h1>welcome to exemplify!</h1>

      <p>
        As a software developer, have you ever tried to implement a user story
        only to find out that the thing you built isn't what the client
        expected? If so, you're not alone! I've done it, too, so at least
        there's two of us.
      </p>

      <p>
        And then I heard of <a href="https://cucumber.io/blog/2015/12/08/example-mapping-introduction" title="Introducing Example Mapping - Cucumber.io">Example Mapping</a>. If you've never heard of it, you're in for a treat. It's an exercise to help you define the acceptance criteria for a story and discover unknowns before you even touch code. Which means you know how to implement the feature that the client actually wants. Everyone's happy!
      </p>

      <p>
        Example mapping was great when everyone was in the same room, but that
        doesn't always happen. So I built exemplify. Now you can example map
        with anyone in the world in real-time.
      </p>

      <p>
        Obviously, it's still a work in progress. Feel free to <a
          href="https://github.com/zachfedor/exemplify/issues">submit issues</a>,
        ask for <a href="https://github.com/zachfedor/exemplify/projects">new features</a>, or <a href="https://github.com/zachfedor/exemplify/pulls">submit a pull request</a>.
      </p>

      <p>
        Thanks!
        <br />
        <a href="https://twitter.com/zachfedor" className="special">- zach</a>
      </p>
    </main>
  );
}

export default About;

