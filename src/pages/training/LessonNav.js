import React from 'react';
import { AppstoreOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';

import lessonsList from './lessons';

const LessonNav = ({setValues}) => {
  const navigate = useNavigate();
  
  const getItem = (label, key, icon, children, type) => {
      return {
          key,
          icon,
          children,
          label,
          type,
      };
  }
  
  const items = lessonsList.map(
    les => getItem(
      les.lesson, les.id, les.id === "logout" ? <LogoutOutlined /> : <AppstoreOutlined />,
      les.id === "logout" ? null : les.videos.map(vid => getItem(vid.title, vid.id))
    )
  )

  const handleNavigate = (value) => {
    if (value.key === "logout") {
      localStorage.removeItem("user");
      navigate("/login");
    } else {
      const getLesson = lessonsList.filter(les => les.id === value.keyPath[1]);
      const getTheVideo = getLesson[0].videos.filter(vid => vid.id === value.keyPath[0]);
      const { title, vimeoId, link, linkDesc } = getTheVideo[0];
      setValues({ title, vimeoId, link, linkDesc });
    }
  }
    
  return ( 
    <div style={{ width: isMobile ? "100%" : 350}}>
      <Menu
        defaultSelectedKeys={['les0-vid1']}
        defaultOpenKeys={['les0', 'les1', 'les2', 'les3', 'les4', 'les5']}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        items={items}
        onClick={(value) => handleNavigate(value)}
      />
    </div>
  );
}
 
export default LessonNav;