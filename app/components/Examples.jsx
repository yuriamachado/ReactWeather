var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return(
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few examples locations to try out:</p>
        <ul>
          <li>
            <Link to='/?location=PortoAlegre'>Porto Alegre, RS</Link>
          </li>
          <li>
            <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
          </li>
        </ul>
      </div>
    )
};

module.exports = Examples;
