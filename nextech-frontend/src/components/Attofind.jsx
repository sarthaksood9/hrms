import React from 'react'

import { Badge, Calendar } from 'antd';
const getListData = (value) => {
    let listData;
    switch (value.date()) {
        case 1:
            listData = [
                {
                    type: 'error',
                    content: 'A',
                },
            ];
            break;
        case 2:
            listData = [
                {
                    type: 'success',
                    content: 'P',
                },
            ];
            break;
        case 3:
            listData = [
                {
                    type: 'warning',
                    content: 'L',
                },
            ];
            break;
        case 4:
            listData = [
                {
                    type: 'error',
                    content: 'A',
                },
            ];
            break;
        case 5:
            listData = [
                {
                    type: 'success',
                    content: 'P',
                },
            ];
            break;
        case 6:
            listData = [
                {
                    type: 'success',
                    content: 'P',
                },
            ];
            break;
        case 7:
            listData = [
                {
                    type: 'error',
                    content: 'A',
                },
            ];
            break;
        case 8:
            listData = [
                {
                    type: 'success',
                    content: 'P',
                },
            ];
            break;
        case 9:
            listData = [
                {
                    type: 'success',
                    content: 'P',
                },
            ];
            break;
        case 10:
            listData = [
                {
                    type: 'success',
                    content: 'P',
                },
            ];
            break;
        case 11:
            listData = [
                {
                    type: 'success',
                    content: 'P',
                },
            ];
            break;
        default:
    }
    return listData || [];
};
const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const Attofind = () => {
    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
      };
      const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map((item) => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} />
              </li>
            ))}
          </ul>
        );
      };
      const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
      };
      return <Calendar cellRender={cellRender} />;
}

export default Attofind