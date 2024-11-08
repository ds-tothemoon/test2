import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Divider } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const CalendarContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  .react-calendar {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .react-calendar__navigation button {
    color: #f87171;
    min-width: 44px;
    background: none;
    font-size: 14px;
    margin-top: 8px;
  }

  .react-calendar__navigation__arrow {
    display: none;
  }

  .react-calendar__tile--active {
    position: relative;
    background-color: #f87171; /* 기본 배경을 투명으로 설정 */
    font-weight: bold; /* 선택된 날짜 강조 */
  }
`;

function WeddingCalendar() {
  const d_day = new Date("2025-10-26");
  const today = new Date(); // 오늘 날짜
  const target = new Date(d_day); // 목표 날짜
  const diffInTime = target.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

  // 결과 반환

  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32, width: "70%" }} plain>
        <Title>D-Day</Title>
      </Divider>
      <CalendarContainer>
        <Calendar
          value={d_day}
          minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          formatDay={(locale, date) => {
            return date.getDate(); // 날짜 숫자만 반환
          }}
          navigationLabel={null}
          showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        />
      </CalendarContainer>
      <br />
      <Title>대성과 승아의 결혼식이 {diffInDays}일 남았습니다.</Title>
    </Wrapper>
  );
}

export default WeddingCalendar;
