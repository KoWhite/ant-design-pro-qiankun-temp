// qiankun-config
import { MicroApp } from 'umi';

export default function Page() {
  return (
    <MicroApp
      name="app1"
      // 开启自动加载状态
      autoSetLoading={true}
      // 自定义加载组件
      loader={(loading) => (
        <div style={{ padding: 24 }}>
          {loading ? '子应用加载中...' : null}
        </div>
      )}
    />
  );
}
