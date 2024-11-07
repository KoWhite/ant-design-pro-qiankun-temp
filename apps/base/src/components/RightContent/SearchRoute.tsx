/*
 * @Author: MichLiu
 * @Date: 2024-11-07 10:54:03
 * @Description:
 * @LastEditTime: 2024-11-07 14:32:02
 * @LastEditors: MichLiu
 */
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { AutoComplete, Input, Empty } from 'antd';
import type { SelectProps } from 'antd/es/select';
import { history } from '@umijs/max';
import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './index.less';

export type SearchRouteProps = {
  className?: string;
  routes?: any[];
};

const SearchRoute: React.FC<SearchRouteProps> = ({ className, routes }) => {
  const [options, setOptions] = useState<SelectProps<unknown>['options']>([]);
  // 搜索值
  const [searchValue, setSearchValue] = useState('');
  // 是否展开
  const [expanded, setExpanded] = useState(false);
  // 输入框 ref DOM
  const inputRef = useRef<InputRef | null>(null);

  // 扁平化路由
  const flatRoutes = (routeList: any[]) => {
    const flat: any[] = [];
    routeList.forEach((route) => {
      if (route.name) {
        flat.push({
          label: route.name,
          value: route.path,
        });
      }
      if (route.routes) {
        flat.push(...flatRoutes(route.routes));
      }
    });
    return flat;
  };

  // 搜索处理
  const handleSearch = (value: string) => {
    setSearchValue(value);
    const allRoutes = flatRoutes(routes || []);
    const filtered = allRoutes.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setOptions(filtered);
  };

  // 选择处理
  const handleSelect = (value: string) => {
    history.push(value);
    setSearchValue('');
    setOptions([]);
    setExpanded(false);
    inputRef.current?.blur();
  };

  // 处理搜索图标点击
  const handleSearchIconClick = () => {
    setExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  // 处理失焦
  const handleBlur = () => {
    if (!searchValue) {
      setExpanded(false);
    }
  };

  return (
    <div className={classNames(className, styles.headerSearch)}>
      {!expanded ? (
        <SearchOutlined
          className={styles.searchIcon}
          onClick={handleSearchIconClick}
        />
      ) : (
        <AutoComplete
          value={searchValue}
          options={options}
          onSelect={handleSelect}
          onSearch={handleSearch}
          style={{ width: 200 }}
          notFoundContent={
            searchValue ? (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="未找到相关菜单"
              />
            ) : null
          }
        >
          <Input
            ref={inputRef}
            style={{ width: expanded ? 200 : 0 }}
            placeholder="搜索菜单"
            prefix={<SearchOutlined />}
            allowClear
            onBlur={handleBlur}
          />
        </AutoComplete>
      )}
    </div>
  );
};

export default SearchRoute;
