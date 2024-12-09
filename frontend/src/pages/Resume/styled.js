import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  .section-container {
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .section-title {
    color: var(--text-color-secondary);
  }

  a {
    text-decoration: underline 2px solid var(--border-color-secondary);
  }

  .heading {
    padding-bottom: 1rem;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      width: max-content;
      background-color: var(--blue);
      color: var(--white);
      padding: 0.1rem 0.2rem;
      border-radius: 0.2rem;
      min-width: 200px;
      max-width: 100%;
    }

    svg {
      display: inline-block;
      font-size: 1rem;
      vertical-align: middle;
      margin: 0 0.2rem;
    }
  }

  .contact {
    .contact__info {
      display: flex;
      gap: 0.3rem;
      align-items: center;

      svg {
        font-size: 1.2rem;
      }
    }
  }

  .links {
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;

    .links__group {
      display: flex;
      gap: 0.35rem;
    }
  }

  .experience {
    .experience__group {
      margin-bottom: 1rem;

      .experience__group__body {
        margin-top: 0.5rem;
      }
    }
  }

  .projects {
    .projects__group {
      margin-bottom: 1rem;

      a {
        display: inline-block;
        margin-left: 0.25rem;
      }

      ul {
        margin-top: 0.5rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .contact {
      flex-direction: row;
      gap: 2rem;
    }

    .links {
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 1rem;
    }
  }
`;
