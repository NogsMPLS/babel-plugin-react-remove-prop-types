const Foo1 = () => <div />;

const Foo2 = () => {
  return <div />;
};

const Foo3 = function () {
  switch (true) {
    case true:
      if (true) {
        return <div />;
      } else {
        return <span />;
      }
      break;
  }
};

function Foo4() {
  return <div />;
}

function Foo5() {
  const bar5 = function () {
    return <div />;
  };

  return bar5();
}

function Foo6() {
  var result = bar6();

  return result;

  function bar6() {
    return <div />;
  }
}

function Foo7() {
  const shallow = {
    shallowMember() {
      return <div />;
    }
  };
  return shallow.shallowMember();
}

function Foo8() {
  const obj = {
    deep: {
      member() {
        return <div />;
      }
    }
  };
  return obj.deep.member();
}
