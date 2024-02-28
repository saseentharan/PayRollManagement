use dbfapproach

create table payroll(id int identity(1,1) primary key,empname varchar(20),dob date,accno int,leave int ,username varchar(20),pass varchar(20), detuction int,salary int on delete cascade)

drop table payroll
alter table payroll drop column overtime

alter table payroll  add pass varchar(20)

alter table payroll add username varchar(20)

select * from payroll
truncate table payroll

-- update payroll

alter   Procedure update_data
@id int,
@name varchar(20),
@dop date,
@accno int,
@leave int,
@username varchar(20),
@password varchar(20)

as
begin
declare @detuction int ;
declare @salary int ;
set @detuction= @leave*1000;
set @salary=(30000-@leave*1000)
 update payroll set empname=@name,dob = @dop ,accno =@accno,leave = @leave,detuction =@detuction,salary = @salary,username=@username,pass=@password where id=@id
end

--drop procedure insert_data



--Insert procedure

alter  procedure insert_data
@name varchar(20),
@dop date,
@accno int,
@leave int,
@username varchar(20),
@password varchar(20)

as
begin
declare @detuction int;
declare @salary int;
set @detuction= @leave*1000;
set @salary=(30000-@leave*1000) 
 INSERT INTO payroll (empname, dob, accno, leave,  detuction, salary,username,pass)
 VALUES (@name, @dop, @accno, @leave,  @detuction, @salary,@username,@password);
end



--#############################################################################################################################################

select * from leave

create table leave(l_id int primary key identity(1,1),From_date date,To_date date , reason varchar(20),leaves int , Detuction int , status int default 0 , e_id int foreign key references payroll(id) ON DELETE CASCADE );

--drop table leave

select * from payroll

INSERT INTO leave (From_date, To_date, reason, leaves, Detuction,  e_id) 
VALUES 
    ('2024-02-21', '2024-02-22', 'Sick Leave', 5, 2, 3), -- Sample leave record 1
    ('2024-03-01', '2024-03-05', 'Vacation', 5, 0,  2),  -- Sample leave record 2
    ('2024-03-15', '2024-03-17', 'Family Leave', 3, 1, 3); 

alter table leave add status int not null default 0

ALTER TABLE leave
ADD COLUMN status INT;

alter table leave drop  column status

select p.empname as name,l.reason  from leave l join payroll p on l.e_id = p.id

select * from leave
truncate table payroll


  alter  procedure insert_leave
  @f_d date,
  @t_d date,
  @reason varchar(20),
  @e_id int

  as
  begin
  declare @detuction int,@leave int , @remaining int
  --SELECT @leave = DATEDIFF(day, From_date, To_date) FROM leave;
  SELECT @leave = DATEDIFF(day, CAST(@f_d AS DATETIME), CAST(@t_d AS DATETIME)) from leave;
  set @detuction=@leave*1000;
  INSERT INTO leave (From_date, To_date, reason, leaves, Detuction, e_id) 
  VALUES (@f_d, @t_d, @reason, @leave,  @detuction, @e_id);
  end
  exec insert_leave @f_d='2024-02-21',t_d='2024-02-22',@reason='wedding',@e_id=3;

EXEC insert_leave '2024-05-01', '2024-05-02', 'feverss', 3;

select * from payroll
select * from leave

alter procedure update_status
@id int,
@status int

as
begin
declare @p_id int , @noleave int , @no int;

SELECT @noleave = leaves FROM [leave] WHERE l_id = @id;

SELECT @p_id = e_id FROM [leave] WHERE l_id = @id;

update leave set status = @status  where l_id = @id

if @status = 1
begin
declare @detuction int;
update payroll set  leave=leave+@noleave , detuction=(leave+@noleave)*1000 ,salary = 30000-(leave+@noleave)*1000 where id=@p_id

end
end

EXEC update_status @id = 6, @status = 1;


select * from leave



-- join 

select p.empName , l.reason from leave l join payroll p on l.e_id=p.id;

ALTER TABLE leave
ADD empname varchar(50);

alter TRIGGER trg_insert_leave_empname
ON leave
AFTER INSERT
AS
BEGIN
    UPDATE leave
    SET empname = p.empname
    FROM inserted i
    INNER JOIN payroll p ON i.e_id = p.id
    WHERE leave.l_id = i.l_id;
END;

truncate table leave 

create function adminlogincheck(@username varchar(20),@pwd varchar(20))
returns int
as 
begin
return (select count(*) as count from payroll where username=@username and pass=@pwd)
end

select * from payroll


update payroll set pass='s1234' where id=11
