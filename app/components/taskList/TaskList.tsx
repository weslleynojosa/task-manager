import Button from "~/components/button/Button";
import { Content, Header, Inner, List, P } from "./TaskList.styles";
import { Task } from "~/types/model.type";
import TaskListItem from "~/components/taskListItem/TaskListItem";
import React, { useEffect, useRef } from "react";

type PropTypes = {
  tasks: Task[];
};

const TaskList: React.FC<PropTypes> = (props) => {
  const { tasks } = props;
  const [showButton, setShowButton] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setShowButton(ref.current.scrollTop > 20);
      }
    };

    const getRef = ref.current;

    if (getRef) {
      getRef.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (getRef) {
        getRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScrollToTop = () => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  };

  return (
    <>
      <Header>
        <Inner>
          <P className={"id-number"}>ID</P>
          <P>Insurance Number</P>
          <P className={"name"}>Name</P>
        </Inner>
        <p>Status</p>
      </Header>
      <Content>
        <List ref={ref}>
          {tasks.map((task: Task, index: number) => {
            return <TaskListItem key={index} item={task} />;
          })}
        </List>
        {showButton && (
          <Button className={"floating"} primary onClick={handleScrollToTop}>
            Back to Top
          </Button>
        )}
      </Content>
    </>
  );
};

export default TaskList;
