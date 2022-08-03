<template>
  <div id="app">
    <func title="数组工具使用简例，更多请查看文档">
      <div>{{'【$u.array.max】取[1,4,8,2,4]最大值：' + $u.array.max([1,4,8,2,4])}}</div>
      <div>{{'【$u.array.maxOfNumber】取[1,4,8,2,4]最大值：' + $u.array.maxOfNumber([1,4,8,2,4])}}</div>
    </func>
    <func title="字符串工具使用简例，更多请查看文档">
      <div>{{'【$u.string.isString】[1,4,8,2,4]：' + $u.string.isString([1,4,8,2,4])}}</div>
      <div>{{'【$u.string.notString】[1,4,8,2,4]：' + $u.string.notString([1,4,8,2,4])}}</div>
      <div>{{'【$u.string.isEmpty】\'123\'：' + $u.string.isEmpty('123')}}</div>
      <div>{{'【$u.string.notEmpty】\'123\'：' + $u.string.notEmpty('123')}}</div>
    </func>
    <func title="时间工具使用简例，更多请查看文档">
      <div>{{'【$u.date.current】当前时间：' + $u.date.current()}}</div>
      <div>{{'【$u.date.format】2020-10-01 12:00:00 保留日期：' + $u.date.format('2020-10-01 12:00:00', 'YYYY-MM-DD')}}</div>
      <div>{{'【$u.date.dayjs().unix()】2020-10-01 12:00:00 时间戳：' + $u.date.dayjs('2020-10-01 12:00:00').unix()}}</div>
    </func>
  </div>
</template>

<script>
import Func from './components/func'
export default {
  name: 'App',
  components: {
    Func
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  margin-top: 60px;
}
</style>
