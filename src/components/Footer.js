import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              TD MANAKA
            </span>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external movies data API
            <a
              href="https://www.themoviedb.org/ "
              target="_blank"
              rel="noopener noreferrer"
            >
               themoviedb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;