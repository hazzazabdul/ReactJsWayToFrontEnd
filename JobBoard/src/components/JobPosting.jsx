/* eslint-disable react/prop-types */

const JobPosting = ({ url, title, by, time }) => {
  const publishedDate = new Date(time * 1000).toLocaleString();
  return (
    <div className="post" role="listItem">
      <h2 className="post__title">
        <a
          className={url ? "" : "inactive__link"}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </h2>
      <span className="post__metadata">
        By {by} . {publishedDate}
      </span>
    </div>
  );
};

export default JobPosting;
