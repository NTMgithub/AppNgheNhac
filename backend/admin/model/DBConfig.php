<?php
class Database
{
    private $hostname='localhost';
    private $username='root';
    private $pass='';
    private $dbname='appnghenhac';
    private $conn=NUll;
    private $result=NULL;

    public function connect() 
    {
        $this->conn=new mysqli($this->hostname,$this->username,$this->pass,$this->dbname);
        if(!$this->conn)
        {
            echo"Kết nối thất bại";
            exit();
        }
        else{
            //mysqli_set_chaset($this->conn,"utf8");  
            mysqli_set_charset($this->conn,'utf8'); 

        }
        return $this->conn;
    }
    // Thực hiện truy vấn
    public function execute($sql)
    {
        $this->result=$this->conn->query($sql);
        return $this->result;
    }
    //Phương thức lấy dữ liệu
    public function getdata()
    {
        if($this->result)
        {
            $data=mysqli_fetch_array($this->result);
        }
        else{
            $data=0;
        }
        return $data;
    }
  
    //Phương thức lấy toàn bộ dữ liệu
    public function getAllData()
    {
        if(!$this->result)
        {
           $data=0;
        }
        else{
            while($datas=$this->getdata())
            {
                $data[]=$datas;
            }
        }
        return $data;
    }
    // Các thành phần
    //$tableName:Tên table
    //$tableProps:Thuộc tính của table
    //$value:giá trị của thuộc tính

    // Phương thức thêm dữ liệu
    public function insertData($tableName,$tableProps,$value)
    {
        $sql="INSERT INTO $tableName($tableProps)VALUES ($value)";
        return $this->execute($sql);
    }
    //Phương thức Sửa dữ liệu
    public function updateData($tableName,$tableProps,$value,$tableId,$id)
    {
        $sql="UPDATE $tableName SET $tableProps='$value' WHERE $tableId='$id' ";
        return $this->execute($sql);
    }
    //Phương thức xóa dữ liệu
    public function deleteData($tableName,$tableId,$id)
    {
        $sql="DELETE FROM $tableName WHERE $tableId='$id' ";
        return $this->execute($sql);
    }

    //Hàm nối URL GET METHOD
                           
    //$parameter = "category=1";                            

    public function mergeURL($parameter){
        $url = $_SERVER['REQUEST_URI'];
        $query = parse_url($url, PHP_URL_QUERY);

        // Returns a string if the URL has parameters or NULL if not
        if ($query) {
            $url .= '&'.$parameter;
            return $url;
        } else {
            $url .= '?'.$parameter;
            return $url;
        }
    }
        


}

