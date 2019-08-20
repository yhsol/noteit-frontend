export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false
};

export const resolvers = {
  Mutation: {
    //   context 로 부터 token, cache 등을 가져와서 로그인에 확인.
    // apollo 에서 type 을 지정할 때 interface 를 지정할 방법 찾아야됨.
    logUserIn: (
      _: string,
      { token }: { token: string },
      { cache }: { cache: any }
    ) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true
        }
      });
      return null;
    },
    logUserOut: (_: string, __: string, { cache }: { cache: any }) => {
      localStorage.removeItem("token");
      window.location.reload();
      //   로그아웃 된 후 기존의 cache 를 지우기 위해 reload
      return null;
    }
  }
};
