import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import React from "react";

const MemberCard = ({ member_data }) => {
  const { member_name, member_image, member_role } = member_data;
  return (
    <>
      <div className="member_card_wrapper">
        <div className="member_image">
          <img src={member_image} alt="member_image" className="member_img" />
        </div>
        <div className="member_details">
          <div className="member_info">
            <h2 className="member_name">{member_name}</h2>
            <span className="member_role">{member_role}</span>
            <div className="social_icon_wrapper">
              <span className="social_icon">
                <FacebookOutlinedIcon />
              </span>
              <span className="social_icon">
                <PhoneInTalkOutlinedIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
