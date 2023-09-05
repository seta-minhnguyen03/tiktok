/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { Wrapper as PopperWrapper } from "../../Popper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Button from "../../../../components/Button";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Switch } from "antd";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <PopperWrapper>
          <div className={cx("content")} tabIndex="-1" {...attrs}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() =>
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }
              />
            )}
            {renderItems()}
          </div>
          <div className={cx("menu-item")}>
            <Button leftIcon={faMoon} className={cx("dark-mode")}>
              Dark Mode
            </Button>
            <Switch className={cx("switch")} />
          </div>
        </PopperWrapper>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;