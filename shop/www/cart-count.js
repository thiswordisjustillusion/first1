//��������� ����������
        $('.count-product').change(function () { //��������� ����������� ������     
        var col = $(this).val(); //�������� ����������
        if (col<1){ col = 1; $(this).val(1); } //���� ����� ������ 1 ��������� 1
        var id = $(this).attr('id'); //�������� id ������
            $.ajax({//����-������
            type: "POST",//�����
            url: 'cartamount.php',//���� ��������
            data: {col_tov: col, id_tov: id},//������
            success: function() {//�������� ���������
               //��� ����� ����������� �����
                }
            });
        });