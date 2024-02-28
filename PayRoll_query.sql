use dbfapproach

create table payroll(id int identity(1,1) primary key,empname varchar(20),dob date,accno int,leave int ,overTime int, detuction int,salary int)

--drop table payroll

--pubcreate table salary(id int identity(1,1) primary key,)

select * from payroll
-- update payroll

alter   Procedure update_data
@id int,
@name varchar(20),
@dop date,
@accno int,
@leave int,
@overtime int 

as
begin
declare @detuction int ;
declare @salary int ;
set @detuction= @leave*1000;
set @salary=(30000-@leave*1000) + @overtime*100
 update payroll set empname=@name,dob = @dop ,accno =@accno,leave = @leave,overtime = @overtime,detuction =@detuction,salary = @salary where id=@id
end

--drop procedure insert_data



--Insert procedure

alter  procedure insert_data
@name varchar(20),
@dop date,
@accno int,
@leave int,
@overtime int 

as
begin
declare @detuction int;
declare @salary int;
set @detuction= @leave*1000;
set @salary=(30000-@leave*1000) + @overtime*100
 INSERT INTO payroll (empname, dob, accno, leave, overtime, detuction, salary)a
 VALUES (@name, @dop, @accno, @leave, @overtime, @detuction, @salary);
end



--#############################################################################################################################################

select * from leave

create table leave(l_id int primary key identity(1,1),From_date date,To_date date , reason varchar(20),leaves int , Detuction int , status int default 0 , e_id int foreign key references payroll(id) ON DELETE CASCADE );
 

alter table leave add status int not null default 0

ALTER TABLE leave
ADD COLUMN status INT;

alter table leave drop  column status

select p.empname as name,l.reason  from leave l join payroll p on l.e_id = p.id

select * from leave



alter  procedure insert_leave
@f_d date,
@t_d date,
@reason varchar(20),
@e_id int

as
begin
declare @detuction int,@leave int , @remaining int
SELECT @leave = DATEDIFF(day, From_date, To_date) FROM leave;
set @detuction=@leave*1000;
INSERT INTO leave (From_date, To_date, reason, leaves, Detuction, e_id) 
VALUES (@f_d, @t_d, @reason, @leave,  @detuction, @e_id);
end

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
update payroll set  leave=leave+@noleave , detuction=(leave+@noleave)*1000 ,salary = 30000-detuction*1000 where id=@p_id

end
end

EXEC update_status @id = 6, @status = 1;




-- join 

select p.empName , l.reason from leave l join payroll p on l.e_id=p.id;

ALTER TABLE leave
ADD empname varchar(50);

CREATE TRIGGER trg_insert_leave_empname
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