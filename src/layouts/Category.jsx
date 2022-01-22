import React from "react";
import { Divider, Menu } from "semantic-ui-react";
import "./Category.css";
import { Link } from "react-router-dom";
export default function Category() {
  return (
    <Menu pointing vertical>
      <Menu.Item>
        <Link to="/main" className="buttonn">
          Photos
        </Link>
      </Menu.Item>

      <Divider horizontal>
        {
          <div>
            <i aria-hidden="true" class="spinner loading icon"></i>
            <i aria-hidden="true" class="certificate loading icon"></i>
            <i aria-hidden="true" class="asterisk loading icon"></i>
          </div>
        }
      </Divider>
      <Menu.Item>
        <Link to="/favorites" className="buttonn">
          Favorites
        </Link>
      </Menu.Item>
      <Divider horizontal>
        {
          <div>
            <i aria-hidden="true" class="spinner loading icon"></i>
            <i aria-hidden="true" class="certificate loading icon"></i>
            <i aria-hidden="true" class="asterisk loading icon"></i>
          </div>
        }
      </Divider>
      <Menu.Item>
        <Link to="/trash" className="buttonn">
          Trash
        </Link>
      </Menu.Item>
      <Divider horizontal>
        {
          <div>
            <i aria-hidden="true" class="spinner loading icon"></i>
            <i aria-hidden="true" class="certificate loading icon"></i>
            <i aria-hidden="true" class="asterisk loading icon"></i>
          </div>
        }
      </Divider>
    </Menu>
  );
}

/*<Menu pointing vertical>
      <Menu.Item>
        <button className="buttonn">Photos</button>
      </Menu.Item>

      <Divider horizontal>
        {
          <div>
            <i aria-hidden="true" class="spinner loading icon"></i>
            <i aria-hidden="true" class="certificate loading icon"></i>
            <i aria-hidden="true" class="asterisk loading icon"></i>
          </div>
        }
      </Divider>
      <Menu.Item>
        <button className="buttonn">Favorites</button>
      </Menu.Item>
      <Divider horizontal>
        {
          <div>
            <i aria-hidden="true" class="spinner loading icon"></i>
            <i aria-hidden="true" class="certificate loading icon"></i>
            <i aria-hidden="true" class="asterisk loading icon"></i>
          </div>
        }
      </Divider>
      <Menu.Item>
        <button className="buttonn">Trash</button>
      </Menu.Item>
      <Divider horizontal>
        {
          <div>
            <i aria-hidden="true" class="spinner loading icon"></i>
            <i aria-hidden="true" class="certificate loading icon"></i>
            <i aria-hidden="true" class="asterisk loading icon"></i>
          </div>
        }
      </Divider>
    </Menu>*/
